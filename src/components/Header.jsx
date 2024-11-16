import React from 'react'
import LogType from '../images/logo.svg'
<images />

const Header = () => {
  return (
    <header>
      <div className="container" >
            <a id="logo" href="desktop.silicon.htm">
              <img src={LogType} alt="Silicon Logotyp" />
              </a>
            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>

            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label for="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

            <a id="auth-signin" href="#" className="btn-primary">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>     
            </a>
            <button className="btn-mobile">
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>
  )
}

export default Header
