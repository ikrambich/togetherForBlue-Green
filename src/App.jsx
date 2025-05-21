import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import HybridProgramsPage from './Pages/HybridProgramsPage';
import OfflineProgramsPage from './Pages/OfflineProgramsPage';
import OnlineProgramsPagge from './Pages/OnlineProgramsPagge';
import Splash from "./Components/Splash/Splash"
function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/online" element={<OnlineProgramsPagge />} />
        <Route path="/offline" element={<OfflineProgramsPage />} />
        <Route path="/hybrid" element={<HybridProgramsPage />} />
        <Route path="/" element={<Splash />} />


      </Routes>
    </Router>
  );
}

export default App;
