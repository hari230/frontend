// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
