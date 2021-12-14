import { useEffect, useRef, useState } from 'react';
import type { Position } from '../../contexts/PositionContext';
import { useSettings } from '../../contexts/SettingsContext';
import { usePersistentState } from '../../utils/storage';
import locations from './locations.json';
import { latestLeafletMap } from './useWorldMap';

const checkPointInsidePolygon = (
  point: [number, number],
  polygon: [number, number][]
) => {
  const x = point[0];
  const y = point[1];

  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0],
      yi = polygon[i][1];
    const xj = polygon[j][0],
      yj = polygon[j][1];

    const intersect =
      yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
};

const checkInside = (position: Position) => {
  return locations.some((location) =>
    checkPointInsidePolygon(
      position.location,
      location.coordinates as [number, number][]
    )
  );
};

function useAdaptiveZoom(position: Position) {
  const [isInside, setIsInside] = useState(() => checkInside(position));
  const [zoomIn, setZoomIn] = usePersistentState('adaptive-zoom-in', 6);
  const [zoomOut, setZoomOut] = usePersistentState('adaptive-zoom-out', 4);
  const isFirstRender = useRef(true);
  const { adaptiveZoom } = useSettings();

  useEffect(() => {
    const isInsideLocation = checkInside(position);
    if (isInside !== isInsideLocation) {
      setIsInside(isInsideLocation);
    }
  }, [isInside, position]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!latestLeafletMap || !adaptiveZoom) {
      return;
    }
    const zoom = latestLeafletMap.getZoom();
    if (isInside) {
      setZoomOut(zoom);
      latestLeafletMap.setZoomAround(position.location, zoomIn);
    } else {
      setZoomIn(zoom);
      latestLeafletMap.setZoomAround(position.location, zoomOut);
    }
  }, [isInside]);
}

export default useAdaptiveZoom;
