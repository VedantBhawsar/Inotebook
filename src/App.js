import './App.css';
import React, { useContext, useState } from 'react'
import Navbar from './Component/Navbar';
import FrontPage from './Component/FrontPage'
import About from "./Component/About"
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom"
import NoteState from './context/noteContext';
import Login from './Component/Login'
import EditNote from './Component/EditNote';
import Proected from './Component/Proected';
import Footer from './Component/Footer';
import Register from './Component/Register';

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
              <Route exact path="/"
                element={<Proected>
                  <FrontPage />
                </Proected>}
              />
              <Route exact path="/editnote" element={<EditNote />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </NoteState>
    </>
  );
}

export default App;