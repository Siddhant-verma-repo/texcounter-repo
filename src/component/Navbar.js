//use boostrap to convert the color if you wont remember
import React from 'react'
import { Link } from 'react-router-dom'
//making navbar in folder and import and export int the main app using <Navbar/>
export default function Navbar(props) {
  
  

  return (
    <>
      {/* Navbar start from here */}
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
            {/* button for changing bg color on onlcick for all so we used toogle mode only */}
            {/* <button type="button" class="btn btn-primary mx-2 "onClick={()=>props.togglemode('primary')} >Blue</button>
            <button type="button" class="btn btn-secondary mx-2"onClick={()=>props.togglemode('secondary')}>Grey</button>
            <button type="button" class="btn btn-success mx-2"onClick={()=>props.togglemode('success')}>Green</button>
            <button type="button" class="btn btn-danger mx-2"onClick={()=>props.togglemode('danger')}>Red</button>
            <button type="button" class="btn btn-warning mx-2"onClick={()=>props.togglemode('warning')}>Yellow</button>
            <button type="button" class="btn btn-info mx-2"onClick={()=>props.togglemode('info')}>Aqua</button>
            <button type="button" class="btn btn-light mx-2"onClick={()=>props.togglemode('light')}>Light</button>
            <button type="button" class="btn btn-dark mx-2"onClick={()=>props.togglemode('dark')}>Dark</button> */}

            <div className={`form-check form-switch text-${props.Mode === 'dark' ? 'light' : 'dark'}`}>
              <input className="form-check-input" onClick={()=>props.togglemode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark mode </label>
            </div>
          </div>
        </div>
      </nav>

      {/* IMP  Navbar end here */}
    </>
  )
}

