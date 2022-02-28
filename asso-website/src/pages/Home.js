import React from 'react';
import classes from '../styles/Home.module.scss';
import Header from '../components/Header';

function Home() {
    return (
        <div className={classes.home}>
            <Header />
            <h1 className={classes.home__title}>Home</h1>
        </div>
    );
}

export default Home;