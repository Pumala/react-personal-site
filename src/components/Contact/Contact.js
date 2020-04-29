import React from 'react';
import './Contact.scss';
import linkedInImg from '../../images/linked-in.png';
import githubImg from '../../images/github.png';
import codesandboxImg from '../../images/codesandbox.png';
import Header from '../Header/Header';
import Quote from '../Quote/Quote';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className="contact">
            <Header />
            <div className="contact-wrapper">
                <Quote />
                <ul>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/carolyn-lam-9b719b128/">
                            <img src={linkedInImg} alt="linkedin icon" />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" to="https://github.com/Pumala">
                            <img src={githubImg} alt="github icon" />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" to="https://codesandbox.io/u/Pumala">
                            <img src={codesandboxImg} alt="codesandbox icon" />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;
