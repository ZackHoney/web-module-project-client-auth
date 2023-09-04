import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';



function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
        <Link className='link'to='login'>Login</Link> 
        <Link className='link'to='friends'>My Friends List</Link>
        <Link className='link'to='friends/add'>Add A Friend</Link>
        <Link className='link'to='/'>Logout</Link>

        </header>
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
