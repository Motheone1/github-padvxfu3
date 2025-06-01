import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Remove LoginScreen import since we're bypassing it
import TripTypeScreen from './screens/TripTypeScreen';
import ArafaTripsScreen from './screens/ArafaTripsScreen';
import MinaTripsScreen from './screens/MinaTripsScreen';
import ShuttleTripsScreen from './screens/ShuttleTripsScreen';
import BusDepotHotelsScreen from './screens/BusDepotHotelsScreen';
import ArafatHotelsScreen from './screens/ArafatHotelsScreen';
import FromHotelsHotelsScreen from './screens/FromHotelsHotelsScreen';
import ToMinaHotelsScreen from './screens/ToMinaHotelsScreen';
import MinaToHotelsHotelsScreen from './screens/MinaToHotelsHotelsScreen';
import ShuttleGuidanceScreen from './screens/ShuttleGuidanceScreen';

function App() {
  return (
    <Router>
      <Routes>
        {/* Start directly from trip-type instead of login */}
        <Route path="/" element={<TripTypeScreen />} />
        
        {/* Keep all other routes unchanged */}
        <Route path="/trip-type" element={<TripTypeScreen />} />
        <Route path="/arafa-trips" element={<ArafaTripsScreen />} />
        <Route path="/mina-trips" element={<MinaTripsScreen />} />
        <Route path="/shuttle-trips" element={<ShuttleTripsScreen />} />
        <Route path="/bus-depot-hotels" element={<BusDepotHotelsScreen />} />
        <Route path="/arafat-hotels" element={<ArafatHotelsScreen />} />
        <Route path="/from-hotels-hotels" element={<FromHotelsHotelsScreen />} />
        <Route path="/to-mina-hotels" element={<ToMinaHotelsScreen />} />
        <Route path="/mina-to-hotels-hotels" element={<MinaToHotelsHotelsScreen />} />
				<Route path="/shuttle-guidance" element={<ShuttleGuidanceScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
