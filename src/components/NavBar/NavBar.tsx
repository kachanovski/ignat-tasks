import React from 'react';
import style from './NavBar.module.css'
import {NavLink} from 'react-router-dom';


function Navbar() {

    return (
        <div className={style.navBar}>
            <div className={style.dropdown}>
                <button className={style.dropbtn}>MENU</button>
                <div className={style.dropdownContent}>
                    <div className={style.navBarItem}>
                        <NavLink to="/prejunior">PreJunior</NavLink>
                    </div>
                    <div className={style.navBarItem}>
                        <NavLink to="/junior">Junior</NavLink>
                    </div>
                    <div className={style.navBarItem}>
                        <NavLink to="/junior+">JuniorPlus</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
