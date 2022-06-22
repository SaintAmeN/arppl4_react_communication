import React from 'react';
import classes from './Navigator.module.css';
import logo from '../assets/logo.svg'
import {Link} from "react-router-dom";

const Navigator = () => {
    return (
        <div className={classes.Navigator}>
            <div className={classes.DoLewej}>
                <div className={classes.ElementNaglowka}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={classes.ElementNaglowka}>
                    <p>ARPPL</p>
                </div>
            </div>
            <div className={classes.DoPrawej}>
                <div className={classes.ElementNaglowka}>
                    <Link to={"/"}>
                        <button>Home</button>
                    </Link>
                </div>
                <div className={classes.ElementNaglowka}>
                    <Link to={"/list"}>
                        <button>Lista</button>
                    </Link>
                </div>
                <div className={classes.ElementNaglowka}>
                    <Link to={"/form"}>
                        <button>Formularz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navigator;
