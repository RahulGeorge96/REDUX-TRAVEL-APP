
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DestinationList from './components/DestinationList';
import MultiStepForm from './components/MultiStepForm';
import FilterComponent from './components/FilterComponent';
import './App.css'; // Import your CSS for styling

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<DestinationList />} />
          <Route path="/form" element={<MultiStepForm />} />
          <Route path="/filter" element={<FilterComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
