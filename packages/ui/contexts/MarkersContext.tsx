import type { ReactNode } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { getMarkerRoutes } from '../components/MarkerRoutes/api';
import type { MarkerRouteItem } from '../components/MarkerRoutes/MarkerRoutes';
import { latestLeafletMap } from '../components/WorldMap/useWorldMap';
import { DEFAULT_MAP_NAME, mapFilters } from 'static';
import { fetchJSON } from '../utils/api';
import { writeError } from '../utils/logs';
import { notify } from '../utils/notifications';
import { isOverwolfApp } from '../utils/overwolf';
import { usePersistentState } from '../utils/storage';
import { useFilters } from './FiltersContext';
import { useUser } from './UserContext';
import type { MarkerSize } from 'static';

export type MarkerBasic = {
  type: string;
  map?: string;
  position: [number, number, number];
  name?: string;
  chestType?: string;
  tier?: number;
  level?: number;
  comments?: number;
  size?: MarkerSize;
  issues?: number;
  _id: string;
  screenshotFilename?: string;
};

type MarkersContextProps = {
  markers: MarkerBasic[];
  setMarkers: (
    value: MarkerBasic[] | ((value: MarkerBasic[]) => MarkerBasic[])
  ) => void;
  setTemporaryHiddenMarkerIDs: (
    value: string[] | ((value: string[]) => string[])
  ) => void;
  markerRoutes: MarkerRouteItem[];
  clearMarkerRoutes: () => void;
  toggleMarkerRoute: (markerRoute: MarkerRouteItem, force?: boolean) => void;
  visibleMarkers: MarkerBasic[];
  refresh: () => void;
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  visibleMarkerRoutes: MarkerRouteItem[];
  refreshMarkerRoutes: () => void;
};
const MarkersContext = createContext<MarkersContextProps>({
  markers: [],
  setMarkers: () => undefined,
  setTemporaryHiddenMarkerIDs: () => undefined,
  markerRoutes: [],
  clearMarkerRoutes: () => undefined,
  toggleMarkerRoute: () => undefined,
  visibleMarkers: [],
  refresh: () => undefined,
  mode: null,
  setMode: () => undefined,
  visibleMarkerRoutes: [],
  refreshMarkerRoutes: () => undefined,
});

type MarkersProviderProps = {
  children: ReactNode;
  readonly?: boolean;
};

type Mode = 'route' | 'marker' | null;

export function MarkersProvider({
  children,
  readonly,
}: MarkersProviderProps): JSX.Element {
  const [markers, setMarkers] = usePersistentState<MarkerBasic[]>(
    'markers',
    []
  );
  const [allMarkerRoutes, setAllMarkerRoutes] = usePersistentState<
    MarkerRouteItem[]
  >('all-marker-routes', []);

  const [markerRoutes, setMarkerRoutes] = usePersistentState<MarkerRouteItem[]>(
    'markers-routes',
    []
  );
  const [mode, setMode] = useState<Mode>(null);
  const [temporaryHiddenMarkerIDs, setTemporaryHiddenMarkerIDs] = useState<
    string[]
  >([]);

  const { filters, setFilters, map } = useFilters();
  const user = useUser();

  const refresh = () => {
    if (!readonly) {
      if (isOverwolfApp) {
        setMarkers([]);
        setAllMarkerRoutes([]);
        setMarkerRoutes([]);
      } else {
        notify(
          Promise.all([
            fetchJSON<MarkerBasic[]>('/api/markers'),
            fetchJSON<MarkerBasic[]>('/api/auth/markers'),
          ]).then(([newMarkers, privateMarkers]) => {
            const allMarkers = newMarkers.concat(privateMarkers);
            if (JSON.stringify(allMarkers) !== JSON.stringify(markers)) {
              setMarkers(allMarkers);
            }
          })
        );
      }
    }
  };

  const refreshMarkerRoutes = async () => {
    try {
      if (!isOverwolfApp) {
        const newMarkerRoutes = await notify(getMarkerRoutes());
        setAllMarkerRoutes(newMarkerRoutes);
      }
    } catch (error) {
      writeError(error);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const selectedMarkerRoutes: MarkerRouteItem[] = [];
    markerRoutes.forEach((markerRoute) => {
      const newMarkerRoute = allMarkerRoutes.find(
        (targetMarkerRoute) => targetMarkerRoute._id === markerRoute._id
      );
      if (newMarkerRoute) {
        selectedMarkerRoutes.push(newMarkerRoute);
      }
    });
    setMarkerRoutes(selectedMarkerRoutes);
  }, [allMarkerRoutes]);

  const hiddenMarkerIds = user?.hiddenMarkerIds || [];
  const visibleMarkers = useMemo(() => {
    return markers.filter((marker) => {
      if (map !== DEFAULT_MAP_NAME && marker.map !== map) {
        return false;
      } else if (map === DEFAULT_MAP_NAME && marker.map) {
        return false;
      }

      if (marker.tier) {
        if (
          !filters.some((filter) => filter === `${marker.type}-${marker.tier}`)
        ) {
          return false;
        }
      } else if (marker.size) {
        if (
          !filters.some((filter) => filter === `${marker.type}-${marker.size}`)
        ) {
          return false;
        }
      } else if (!filters.some((filter) => filter === marker.type)) {
        return false;
      }
      if (temporaryHiddenMarkerIDs.includes(marker._id)) {
        return false;
      }
      if (filters.includes('hide-without-comment') && !marker.comments) {
        return false;
      }
      if (filters.includes('hide-without-issue') && !marker.issues) {
        return false;
      }
      if (!filters.includes('hidden') && hiddenMarkerIds.includes(marker._id)) {
        return false;
      }
      return true;
    });
  }, [filters, markers, hiddenMarkerIds, temporaryHiddenMarkerIDs, map]);

  const toggleMarkerRoute = (markerRoute: MarkerRouteItem, force?: boolean) => {
    const markerRoutesClone = [...markerRoutes];
    const index = markerRoutesClone.findIndex(
      (targetMarkerRoute) => targetMarkerRoute._id === markerRoute._id
    );
    if (index > -1 && force !== true) {
      markerRoutesClone.splice(index, 1);
    } else if (force !== false) {
      const types = Object.keys(markerRoute.markersByType);

      const requiredFilters: string[] = [];
      types.forEach((markerType) => {
        const mapFilter = mapFilters.find(
          (mapFilter) => mapFilter.type === markerType
        );
        if (mapFilter) {
          if (mapFilter.sizes) {
            requiredFilters.push(
              ...mapFilter.sizes.map((size) => `${mapFilter.type}-${size}`)
            );
          } else {
            requiredFilters.push(mapFilter.type);
          }
        }
      });

      setFilters((filters) => [...filters, ...requiredFilters]);
      markerRoutesClone.push(markerRoute);
      if (latestLeafletMap) {
        latestLeafletMap.fitBounds(markerRoute.positions);
      }
    }

    setMarkerRoutes(markerRoutesClone);
  };

  function clearMarkerRoutes() {
    setMarkerRoutes([]);
  }

  const visibleMarkerRoutes = useMemo(
    () =>
      allMarkerRoutes.filter((markerRoute) => {
        if (map !== DEFAULT_MAP_NAME && markerRoute.map !== map) {
          return false;
        } else if (map === DEFAULT_MAP_NAME && markerRoute.map) {
          return false;
        }
        return true;
      }),
    [allMarkerRoutes, map]
  );

  return (
    <MarkersContext.Provider
      value={{
        markers,
        setMarkers,
        setTemporaryHiddenMarkerIDs,
        visibleMarkers,
        refresh,
        markerRoutes,
        clearMarkerRoutes,
        toggleMarkerRoute,
        mode,
        setMode,
        visibleMarkerRoutes,
        refreshMarkerRoutes,
      }}
    >
      {children}
    </MarkersContext.Provider>
  );
}

export function useMarkers(): MarkersContextProps {
  return useContext(MarkersContext);
}
