import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const Login = () => {
  return <h2>Login</h2>
}

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/'>
        <Login />
      </Route>
      </Routes>
    </div>
    </Router>
  );

}

export default App;
