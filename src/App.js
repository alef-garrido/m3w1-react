import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import CalcPage from './components/pages/CalcPage'
import Quote from './components/pages/Quote'

/* eslint-disable-next-line react/prefer-stateless-function  */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='calculator' element={<CalcPage />}/>
          <Route path='quote' element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
