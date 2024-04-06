// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logs from './components/Logs';
import Metrics from './components/Metrics';

function App() {
  const [selectedTime, setSelectedTime] = useState(1);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onTimeSelect={handleTimeSelect} />
        <Routes>
          <Route path="/logs" element={<Logs selectedTime={selectedTime} />} />
          <Route path="/metrics" element={<Metrics selectedTime={selectedTime} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
