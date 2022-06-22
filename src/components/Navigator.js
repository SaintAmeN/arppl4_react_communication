import React from 'react';
import classes from './Navigator.module.css';
import logo from '../assets/logo.svg'

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
                    <button>Home</button>
                </div>
                <div className={classes.ElementNaglowka}>
                    <button>Lista</button>
                </div>
                <div className={classes.ElementNaglowka}>
                    <button>Formularz</button>
                </div>
            </div>
        </div>
    );
};

export default Navigator;
