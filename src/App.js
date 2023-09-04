import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/friends' element={<FriendsList />} />
          <Route path='/friends/add' element={<AddFriend />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );

}

export default App;
