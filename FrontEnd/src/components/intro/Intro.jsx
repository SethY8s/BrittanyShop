import React from 'react';
// import { Carousel } from 'react-bootstrap';
import introCSS from './intro.module.css'


export default function Intro() {
  return (
    <div className={introCSS.box}>
      
      <div className={introCSS.text}>
      <h2 className={introCSS.textBackground}>Welcome to my Gallery</h2>
      <h4 className={introCSS.textBackground}>Order online or reach out for special orders</h4>
      </div>
       </div>
  )
}
