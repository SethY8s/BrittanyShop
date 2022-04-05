import React, {useContext} from 'react'
import viewCSS from './viewItem.module.css'
import image from '../../images/fox1.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import shoppingContext from '../../context/shopping-context'


export default function ViewItem() {
  const {currentItem} = useContext(shoppingContext)

  return (
    <div className={viewCSS.viewItemContainer}>
    <img className={viewCSS.image} src={image} alt="nlkk" />
    <div>
        <h2>{currentItem.title}</h2>
        <h4>${currentItem.price}</h4>
        <p>{currentItem.description}</p>
        <Link to='/'><Button>Back to Home</Button></Link>
        <Button>Add to Cart</Button>
    </div>
    </div>
  )
}
