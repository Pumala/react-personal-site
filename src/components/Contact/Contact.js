import React from 'react';
import './Contact.scss';
import linkedInImg from '../../images/linked-in.png';
import Header from '../Header/Header';
import Quote from '../Quote/Quote';

const Contact = () => {
    return (
        <section className="contact">
        <Header />
        <div className="contact-wrapper">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/carolyn-lam-9b719b128/">
                <img src={linkedInImg} alt="linkedin" />
            </a>
            <Quote />
        </div>
    </section>
    );
}

export default Contact;
