import React from 'react'
import viewCSS from './viewItem.module.css'
import image from '../../images/fox1.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ViewItem() {
  return (
    <div className={viewCSS.viewItemContainer}>
    <img className={viewCSS.image} src={image} alt="nlkk" />
    <div>
        <h2>Masala of Fox and Moon(Foxxy Lady)</h2>
        <h4>$200 + 20 for shipping</h4>
        <p>This is a Masala of a fox surrounded by the moon and energy.The Fox represents freedom</p>
        <Link to='/'><Button>Back to Home</Button></Link>
        <Button>Add to Cart</Button>
    </div>
    </div>
  )
}
