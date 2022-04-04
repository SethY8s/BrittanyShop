import React from 'react'
import productCSS from './product.module.css'
import image from '../../images/fox1.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Product({ productData }) {
  return (
    <div className={productCSS.hel}>
        <div className='d-flex flex-column align-items-center'>
        <img className={productCSS.productImage} src={image} alt="nlkk" />
        <h6>{productData.title}($200)</h6>
        <span>
            <Link to='/product:id'><Button>View</Button></Link>
            <Button>Add to Cart</Button>
        </span>
        </div>
    </div>
  )
}
