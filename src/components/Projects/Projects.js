import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import reactPlaygroundImg from '../../images/react-playground-app.png';
import beerDashImg from '../../images/beer-dash-app.png';
import personalSiteImg from '../../images/old-personal-site.png';
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
        <h1>Side React.js Projects</h1>
        <ul>
            <li>
                <img src={reactPlaygroundImg} alt="react playground app image" />
                <p><span>React Playground:</span> app featuring mini fun apps that users can try out</p>
                <div className="button-wrapper">
                    <a target="_blank" href="https://github.com/Pumala/react-playground">
                        <button>Repo</button>
                    </a>
                    <a target="_blank" href="http://iamclamclam.com/react-playground/#/">
                        <button>Demo</button>
                    </a>
                </div>
            </li>
            <li>
                <img src={beerDashImg} alt="beer dash app image" />
                <p><span>Beer Dash:</span> app consuming a free beer api where users can search for beers</p>
                <div className="button-wrapper">
                    <a target="_blank" href="https://github.com/Pumala/beer-dash">
                        <button>Repo</button>
                    </a>
                    <a target="_blank" href="https://shrouded-ridge-76758.herokuapp.com/#/">
                        <button>Demo</button>
                    </a>
                </div>
            </li>
        </ul>
        <h2>Previous Personal Website</h2>
        <ul>
            <li>
                <img src={personalSiteImg} alt="old personal site image" />
                <p><span>Personal Website:</span> app showcasing past projects</p>
                <div className="button-wrapper">
                    <a target="_blank" href="https://github.com/Pumala/pumala.github.io">
                        <button>Repo</button>
                    </a>
                    <a target="_blank" href="http://iamclamclam.com/">
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
