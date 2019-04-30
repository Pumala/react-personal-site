import React from 'react';
import './Home.scss';
import Header from '../Header/Header';

const Home = () => {
    return (
        <section className="home-title-section">

            <Header />

            <div className="name-tag">
                <div className="name-tag-wrapper">
                    <div className="intro">
                        <p className="greeting">
                            <span>Hello</span> my name is</p>
                    </div>
                    <div className="name">
                        <h1>Carolyn</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
