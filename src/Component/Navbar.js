import React, { useContext, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { NoteContext } from '../context/noteContext'
import Avatar from '../img/Avatar.png'
import '../App.css'

const Navbar = () => {
  const location = useLocation()
  const context = useContext(NoteContext)
  const { AuthToken, Logout } = context
  const [dropdown, setdropdown] = useState('none')


  return (
    <nav className=" navbar navbar-expand-md navbar-dark bg-dark position-fixed" style={{ width: "100%", zIndex: '1' }}>
      <div className="container-fluid">
        <Link to={'/'} className="head navbar-brand" >INoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {
                AuthToken && <Link to={'/'} className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" >Home</Link>

              }
            </li>
            <li className="nav-item">
              {
                AuthToken && <Link to={"/about"} className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} >About</Link>
              }
            </li>
          </ul>
          <div class="">
            <form className="d-flex" style={{ gap: "15px" }} >
              {
                !AuthToken ? <Link to={'/login'} type="button" className="font-link btn btn-primary">Login</Link> :
                  <img src={Avatar} className='Avatar' width={'43px'} alt="avatar" style={{
                    borderRadius: "100%", cursor: "pointer"
                  }} onClick={() => { dropdown === 'block' ? setdropdown('none') : setdropdown('block') }} />
              }
            </form>
            <div class="dropdown" style={{ display: `${dropdown}` }} aria-labelledby="dropdownMenuButton1">
              <button
                onClick={
                  () => {
                    setdropdown('none')
                    Logout()
                  }
                } class="dropdown-item">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar