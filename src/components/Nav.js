import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg gap-0 bg-body-tertiary fixed-top  ">
    <div className="container-fluid py-2 px-4 fs-4 navbar-dark " style ={{ backgroundColor:'#212F3D '}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/About">About</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2 fs-5" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success fs-5" style={{backgroundColor: "red", color: "white"}}type="submit">Search</button>
        </form>
      </div>
      
  </nav>
  )
}

export default Nav