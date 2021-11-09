import React from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import './css/Navbar.css'
import brand_0 from './img/brand_0.png'
import brand_1 from './img/brand_1.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="col-md-6">
                    <a to='/' className="logo-left">
                        <img src={brand_0} alt="brand-logo"/>
                    </a>
                </div>
                <div className="col-md-6">
                    <a to='/' className="logo-right">
                        <img src={brand_1} alt="addition"/>
                    </a>
                </div>
                    {/* <NavLink to='/' className="float-left">
                        <img src={brand_0} alt="brand-logo"/>
                    </NavLink>
                    <NavLink to='/' className="float-right">
                        <img src={brand_1} alt="addition"/>
                    </NavLink> */}
            </nav> 
        </>
    )
}

// export default withRouter(Navbar)
export default Navbar