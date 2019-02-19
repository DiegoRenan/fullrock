import React from 'react'

export default props => (
  <nav className="navbar navbar-light bg-default">
    <a className="navbar-brand" href="#">Navbar</a>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                                                                             data-toggle="dropdown" 
                                                                             aria-haspopup="true" 
                                                                             aria-expanded="false">
          Olá, Carlos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Home</a>
          <a className="dropdown-item" href="#">Settings</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </li>
  </nav>
)