import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ scrollPos }) => {

    const [scrollY, setScrollY] = useState(null);

    const [isScrolling, setIsScrolling] = useState(false);

    const [isMenuIconOpen, setIsMenuIconOpen] = useState(false);

    useEffect(() => {

        setScrollY(scrollPos);

        if (scrollY > 30) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }


    }, [scrollPos, scrollY]);

    const toggleMenu = () => {
        setIsMenuIconOpen(!isMenuIconOpen);
    }

    return (
        <div className={`header ${isScrolling ? 'scrolling' : ''}`} >
            <div className={`nav group ${isMenuIconOpen ? 'show' : ''}`}>
                <button
                    className={`hamburger ${isMenuIconOpen ? 'hamburger--active' : ''}`}
                    type="button"
                    onClick={() => toggleMenu()}
                >
                    <span className="hamburger__box">
                        <span className="hamburger__inner"></span>
                    </span>
                </button>
                {
                    !isMenuIconOpen && <ul className=" nav__menu">
                        <li className="nav__menu__item">
                            <Link to="/" className="nav__menu__link">Home</Link>
                        </li>
                        <li className="nav__menu__item">
                            <Link to="/about" className="nav__menu__link">About Me</Link>
                        </li>
                        <li className="nav__menu__item">
                            <Link to="/projects" className="nav__menu__link">Projects</Link>
                        </li>
                        <li className="nav__menu__item">
                            <Link to="/contact" className="nav__menu__link">Contact</Link>
                        </li>
                    </ul>
                }
            </div>

            <div className="nav__mobile">
                {
                    isMenuIconOpen && <ul className="desktop-nav">
                        <li className="nav__menu__item">
                            <Link to="/" className="nav__menu__link">Home</Link>
                        </li>
                        <li className="nav__menu__item">
                            <Link to="/about" className="nav__menu__link">About Me</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="nav__menu__link">Projects</Link>
                        </li>
                        <li className="nav__menu__item">
                            <Link to="/contact" className="nav__menu__link">Contact</Link>
                        </li>
                    </ul>
                }
            </div>
        </div>
    );
}

export default Header;
