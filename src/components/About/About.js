import React from 'react';
import Header from '../Header/Header';
import './About.scss';
import faceImg from '../../images/black_white_face.jpg';

const About = () => {
    return (
        <section className="about">
            <Header />
            <div className="about-wrapper">
                <h1>About</h1>
                <p>I am currently a Software Engineer at Tin Roof Software, Inc in Atlanta, GA. I really enjoy learning and pushing
                my mind to think outside the box. I love aha moments, creativity, compassion, and laughter. When
                I'm away from my computer, you can find me climbing stairs, drinking a refreshing cold beer out
                on the porch, exploring the outdoors, or coming up with a new melody.
            </p>
            <img src={faceImg} alt="black and white face" />
        </div>
    </section>
    );
}

export default About;
