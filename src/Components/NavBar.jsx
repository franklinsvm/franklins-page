import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"
import { SideBarData } from './SideBarData';
import "./NavBar.css"

const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
  return (
    <>
        <div className="navbar">
            <ion-icon className="menu-bars" color="light" name="menu-outline" onClick={showSidebar}></ion-icon>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <div className="navbar-toggle">
                    <ion-icon className="close" color="light" name="close-outline" onClick={showSidebar}></ion-icon>
                </div>
            <ul className="nav-menu-items" onClick={showSidebar}>
                {SideBarData.map((item, index) => {
                    return (
                        <>
                        <li key={index} className={item.cName}>
                            <Link smooth to={item.path}>
                                {item.icon}
                                <span className="item-title">{item.title}</span>
                            </Link>
                        </li>
                        </>
                    )
                })}
            </ul>
        </nav>
    </>
  )
}

export default NavBar