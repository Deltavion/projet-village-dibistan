import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Header.module.scss'

function Header() {
    return (
        <div className={classes.header}>
            <h1>Dibistassociation</h1>
            <Link to="/" className={classes.header__links}>Accueil</Link>
            <Link to="/donations" className={classes.header__links}>Donations</Link>
            <Link to="/objectifs" className={classes.header__links}>Objectifs</Link>
        </div>
    );
}

export default Header;