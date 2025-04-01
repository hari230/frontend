// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Login from './login';

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
