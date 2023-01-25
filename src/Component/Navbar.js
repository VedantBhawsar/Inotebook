import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom"
import { NoteContext } from '../context/noteContext'

const Navbar = () => {
  const location = useLocation()
  console.log(location)
  const context = useContext(NoteContext)
  const { AuthToken } = context


  return (
    <nav className=" navbar navbar-expand-md navbar-dark bg-dark position-fixed" style={{ width: "100%", zIndex: '1' }}>
      <div className="container-fluid">
        <Link to={'/'} className="head navbar-brand" >INoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} >About</Link>
            </li>
          </ul>
          <form className="d-flex">
            {
              !AuthToken && <Link to={'/login'} type="button" className="font-link btn btn-primary">Login</Link>

            }{
              AuthToken && <h1>Your Login</h1>
            }
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar