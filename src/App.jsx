import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import HybridProgramsPage from './Pages/HybridProgramsPage';
import OfflineProgramsPage from './Pages/OfflineProgramsPage';
import OnlineProgramsPagge from './Pages/OnlineProgramsPagge';

function App() {
  return (
    <Router basename="/togetherForBlue-Green">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/online" element={<OnlineProgramsPagge />} />
        <Route path="/offline" element={<OfflineProgramsPage />} />
        <Route path="/hybrid" element={<HybridProgramsPage />} />
      

      </Routes>
    </Router>
  );
}

export default App;
