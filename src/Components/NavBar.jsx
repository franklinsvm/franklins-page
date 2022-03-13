import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { SideBarData } from './SideBarData';

const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
  return (
    <>
    <div className="navbar">
        <Link to="#" className="menu-bars">
            <ion-icon name="menu-outline" onClick={showSidebar}></ion-icon>
        </Link>
    </div>
    <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                    <ion-icon name="close-outline"></ion-icon>
                </Link>
            </li>
            {SideBarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </>
  )
}

export default NavBar