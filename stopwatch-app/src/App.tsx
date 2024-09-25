import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <button onClick={toggleSidebar} style={{ marginLeft: '10px', marginTop: '10px' }}>
        {isSidebarOpen ? 'サイドバーを閉じる' : 'サイドバーを開く'}
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div style={{ marginLeft: isSidebarOpen ? '200px' : '0', transition: 'margin-left 0.3s' }}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
