import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

const Title = () => {
  return <h2>Hello</h2> 
}

function App() {
  return (
  
    <div className="App">
       <Routes>
          <Route path="/">
            <Title />
          </Route>
          </Routes>
    </div>
    
  );
}

export default App;
