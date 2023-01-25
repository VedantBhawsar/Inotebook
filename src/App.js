import './App.css';
import React, { useContext, useState } from 'react'
import Navbar from './Component/Navbar';
import FrontPage from './Component/FrontPage'
import About from "./Component/About"
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom"
import NoteState from './context/noteContext';
import Login from './Component/Login'
import EditNote from './Component/EditNote';

const App = () => {

  // const context = useContext(NoteContext)
  // const { AuthToken } = context
  const [AuthToken, setAuthToken] = useState(true)

  return (
    <>
      <NoteState>
        <Router>
          <Navbar className="position-fixed" />
          <div className='container' style={{ overflow: 'hidden' }}>
            <Routes>
              {
                AuthToken ? <Route exact path="/" element={<FrontPage />}
                /> : <h1>animal</h1>
              }
              <Route exact path="/editnote" element={<EditNote />} />
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