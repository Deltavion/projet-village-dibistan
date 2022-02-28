import React from 'react';
import classes from '../styles/Objectifs.module.scss'
import Header from '../components/Header';

function Objetifs(props) {
    return (
        <div className={classes.objectifs}>
            <Header />
            <h1 className={classes.objectifs__title}>Objetifs de l'asso</h1>
        </div>
    );
}

export default Objetifs;