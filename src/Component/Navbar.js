import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  useEffect(() => {
    console.log(location.pathname)
  }, [location])


  return (
    <nav className=" navbar navbar-expand-md navbar-dark bg-dark ">
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
            <Link to={'/login'} type="button" className="font-link btn btn-primary">Login</Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar