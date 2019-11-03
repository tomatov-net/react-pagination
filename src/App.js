import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination'

function App() {
  return (
    <div className="App">
        <div className="container">
            <Pagination />
        </div>
    </div>
  );
}

export default App;
