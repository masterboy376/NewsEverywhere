import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
       <nav className="navbar fixed-top navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">NewsEverywhere</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas bg-dark text-light offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">NewsEverywhere</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <form className="d-flex mb-4">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-info" type ="submit">Search</button>
                </form>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Category
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                      <li><Link className="dropdown-item" to="/">General</Link></li>
                      <li><Link className="dropdown-item" to="/business">Business</Link></li>
                      <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                      <li><Link className="dropdown-item" to="/health">Health</Link></li>
                      <li><Link className="dropdown-item" to="/science">Science</Link></li>
                      <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                      <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

