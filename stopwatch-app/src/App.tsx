import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import Home from './components/Home.tsx';
import Stopwatch from './components/Stopwatch.tsx';
import Timer from './components/Timer.tsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
