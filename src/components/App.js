import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import User from './User';
import Application from './Application';
import Academic from './Academic';
import Enter from './Enter';
import University from './University';
import Uploadfile from './Uploadfile';
function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
        <Route path='/application/' element={<Application/>} />
        <Route path='/academic/' element={<Academic/>} />
        <Route path='/enter/' element={<Enter/>} />
        <Route path='/university/' element={<University/>} />
        <Route path='/uploadfile/' element={<Uploadfile/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;