import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FoodList from './Food/FoodList';

function Welcome() {
  return <header>OOOOOOOOOOh yeeeeeaaaaahhhh</header>;
}
function App() {
  return (
    <div className="App">
      <Header title="APEAL2REAL Web Dev" />
      <FoodList />
    </div>
  );
}

export default App;
