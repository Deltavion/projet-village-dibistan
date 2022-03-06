import React from 'react';
import classes from '../styles/Home.module.scss';
import Header from '../components/Header';
import logo from '../assets/gradient_bilinear.jpg';

function Home() {
    return (
        <div className={classes.home}>
            <Header />
            <h1 className={classes.home__title}>Home</h1>
<<<<<<< Updated upstream
            <h2>Présentation</h2>
=======
            <div className={classes.home__timeline}>
                <div className={classes.home__timeline__point}>
                    <img src={logo} alt="img" />
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                    animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                    aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                    pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                    commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                    eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                    Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                    culpa duis.</p>
                </div>
                <div className={classes.home__timeline__point}>
                    <img src={logo} alt="img" />
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                    animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                    aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                    pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                    commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                    eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                    Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                    culpa duis.</p>
                </div>
                <div className={classes.home__timeline__point}>
                    <img src={logo} alt="img" />
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                    animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                    aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                    pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                    commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                    eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                    Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                    culpa duis.</p>
                </div>
            </div>
>>>>>>> Stashed changes
        </div>
    );
}

export default Home;