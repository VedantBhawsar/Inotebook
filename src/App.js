import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import FrontPage from './Component/FrontPage'
import About from "./Component/About"
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom"
import NoteState from './context/noteContext';
import Login from './Component/Login'

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar className="position-fixed" />
          <div className='container' style={{ overflow: 'hidden' }}>
            <Routes>
              <Route exact path="/" element={<FrontPage />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;