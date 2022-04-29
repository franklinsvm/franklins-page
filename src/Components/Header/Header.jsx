import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className="header">
    <Link className="header-link" to="/#hero-id">
     <img className="logo-header" src="/Imgs/log (1).png" alt="Franklin's logo"/>
    </Link>
    </div>  
    )
}

export default Header