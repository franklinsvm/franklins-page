import React from 'react'
import "./PortClip.css"
import { Link } from 'react-router-dom'

const PortClip = () => {
    return (
    <div className='port-clip-container'>
        <Link to="/portfolio">
        <ion-icon color="dark" name="flask-sharp"></ion-icon>
        </Link>
    </div>
  )
}

export default PortClip