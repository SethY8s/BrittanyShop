import React from 'react';
import image from '../../images/Brit.jpg';
import aboutmeCSS from './homeAboutMe.module.css';
import { Link } from 'react-router-dom';

export default function HomeAboutMe() {
  return (
    <div className={aboutmeCSS.aboutContainer}>
      <img className={aboutmeCSS.myImage} src={image} alt="Me" />
      <div className={aboutmeCSS.text}>
        <h2>Hi, I'm Brittany!</h2>

        <p>
          <b>Welcome to my website! </b>I am a painter from Maine, but currently
          living in West Chester PA. I have been a painter for many years, and
          now you can see my work and buy it directly from here! <br/>If you want to
          learn more about me, and what inspires me as an artist, you can click
          on the <Link style={{textDecoration:'none'}}to='/AboutMe'>About me</Link> section.
          <br />
          <div className="mt-3 text-center">
            <b>I hope you enjoy my work</b>
          </div>
        </p>
      </div>
    </div>
  );
}
