import React, { useState, useEffect } from 'react';
import './Projects.scss';
import reactPlaygroundAppImg from '../../images/tinified/react-playground-app.png';
import beerDashAppImg from '../../images/tinified/beer-dash-app.png';
import personalSiteImg from '../../images/tinified/old-personal-site.png';
import transferMoneyAppImg from '../../images/transfer-money-app.png';
import ourWordsMoveAppImg from '../../images/our-words-move.png';
import Header from '../Header/Header';

const Projects = () => {

    const [scrollPos, setScrollPos] = useState();

    const handleScroll = () => {
        if (window.scrollY !== 0) {
            setScrollPos(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="projects">
            <Header scrollPos={scrollPos} />
            <div className="projects-wrapper">
                <h1>Side Projects</h1>
                <ul>
                    <li>
                        <img src={ourWordsMoveAppImg} alt="our words move app" />
                        <p>
                            <span>Our Words Move: </span> 
                            blog app built in React, Redux, and Firebase where members can create, edit, and delete posts 
                            <span className="login-creds">Demo Login Email: test123@gmail.com<br/>Demo Login Password: test123</span>
                        </p>
                        <div className="button-wrapper">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pumala/clamclam-blogs">
                                <button>Repo</button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://clamclamblogs.web.app/">
                                <button>Demo</button>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src={transferMoneyAppImg} alt="transfer money app" />
                        <p><span>Transfer Money:</span> app built in Angular 7 where users can create new money transfers and filter recent transactions by date, beneficiary, or amount</p>
                        <div className="button-wrapper">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pumala/transfer-money-app">
                                <button>Repo</button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="http://transfer-money-app.surge.sh/">
                                <button>Demo</button>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src={reactPlaygroundAppImg} alt="react playground app" />
                        <p><span>React Playground:</span> app featuring mini apps that users can try out, such as a cooking timers app where users can create, edit, or delete multiple timers</p>
                        <div className="button-wrapper">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pumala/react-playground">
                                <button>Repo</button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="http://iamclamclam.com/react-playground/#/">
                                <button>Demo</button>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src={beerDashAppImg} alt="beer dash app" />
                        <p><span>Beer Dash:</span> app built in React that consumes a free beer API, features pagination, and a search bar to find information about a beer</p>
                        <div className="button-wrapper">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pumala/beer-dash">
                                <button>Repo</button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://shrouded-ridge-76758.herokuapp.com/#/">
                                <button>Demo</button>
                            </a>
                        </div>
                    </li>
                </ul>
                <h2>Previous Personal Website</h2>
                <ul>
                    <li>
                        <img src={personalSiteImg} alt="old personal site" />
                        <p><span>Personal Website:</span> app showcasing past projects built in late 2016 / early 2017</p>
                        <div className="button-wrapper">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pumala/pumala.github.io">
                                <button>Repo</button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="http://iamclamclam.com/">
                                <button>Demo</button>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Projects;
