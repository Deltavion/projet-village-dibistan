import React from 'react';
import Header from '../components/Header';
import classes from '../styles/Donations.module.scss';

function Donations() {
    return (
        <div className={classes.donations}>
            <Header />
            <h1 className={classes.donations__title}>Donations</h1>
        </div>
    );
}

export default Donations;