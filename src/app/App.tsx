import { ToastContainer } from 'react-toastify';
import styles from './App.module.css';
import AppHeader from './components/AppHeader/AppHeader';
import MapFilter from './components/MapFilter/MapFilter';
import ResizeBorder from './components/ResizeBorder/ResizeBorder';
import WorldMap from './components/WorldMap/WorldMap';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import type { MarkerBasic } from './contexts/MarkersContext';
import UpsertArea from './components/UpsertArea/UpsertArea';
import type { MarkerRouteItem } from './components/MarkerRoutes/MarkerRoutes';

function App(): JSX.Element {
  const [targetMarker, setTargetMarker] = useState<
    MarkerBasic | true | undefined
  >(undefined);
  const [targetMarkerRoute, setTargetMarkerRoute] = useState<
    MarkerRouteItem | true | undefined
  >(undefined);

  return (
    <div className={styles.container}>
      <AppHeader />
      <MapFilter
        onMarkerCreate={() => setTargetMarker(true)}
        onMarkerRouteUpsert={setTargetMarkerRoute}
      />
      <WorldMap onMarkerEdit={setTargetMarker} />
      <ResizeBorder />
      <ToastContainer theme="dark" pauseOnFocusLoss={false} />
      <UpsertArea
        marker={targetMarker}
        markerRoute={targetMarkerRoute}
        onMarkerClose={() => setTargetMarker(undefined)}
        onRouteClose={() => setTargetMarkerRoute(undefined)}
      />
    </div>
  );
}

export default App;
