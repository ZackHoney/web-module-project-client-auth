import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Login = () => {
  return <h2>Login</h2>
}

const FriendList = () => {
  return <h2>Friend List</h2>
}

const AddFriend = () => {
  return <h2>Add Friend</h2>
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/friendlist' element={<FriendList />} />
          <Route path='/addfriend' element={<AddFriend />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );

}

export default App;
