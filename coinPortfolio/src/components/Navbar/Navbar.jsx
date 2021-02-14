import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import { FaBitcoin, FaBars } from "react-icons/fa";
import './Navbar.css'


function Navbar() {

    const [buger, setBuger] = useState(false);

    const clickBuger = () =>{
        setBuger(!buger)
    }

    const clickActive = () => {
        
    }


    return (
        <div className="Navbar-container">
            <div className="Navbar-logo">
                <div className="Navbar-logo-icon-container">
                    <FaBitcoin className="Navbar-logo-icon"/>
                </div>
                <h2 className="Navbar-logo-title">코인부자</h2>
            </div>
            <ul className={buger ? 'Navbar-list active' : 'Navbar-list'}>
                {NavbarData.map(item => {
                    return(
                        <li key={item.id} className="Navbar-list-item" onClick={() => clickActive()}>
                            <Link to={item.path}>
                                <h3 className="Navbar-list-item-title" onClick={() => clickBuger()}>{item.title}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="bars-container">
                <FaBars className="bars" onClick={() => clickBuger()}/>
            </div>
        </div>
    )
}

export default Navbar
