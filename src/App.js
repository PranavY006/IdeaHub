import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from 
'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin/App';
import ProjectInfo from './pages/ProjectInfo/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/signin' element={<SigninPage/>} exact />
        <Route path='/projectinfo' element={<ProjectInfo/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
