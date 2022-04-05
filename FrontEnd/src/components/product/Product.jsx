import React, {useContext} from 'react'
import productCSS from './product.module.css'

// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShoppingContext from '../../context/shopping-context';


export default function Product({ productData }) {



  const {addToCart, loadCurrentItem} = useContext(ShoppingContext) 
  return (
    <div className={productCSS.hel}>
        <div className='d-flex flex-column align-items-center'>
        <img className={productCSS.productImage} src={productData.image} alt="nlkk" />
        <h6>{productData.title}(${productData.price})</h6>
        <span>
            <Link to={`/product:${productData.id}`}><button onClick={()=> loadCurrentItem(productData)}>View</button></Link>


            


            <button onClick={() => addToCart(productData.id)}>Add to Cart</button>
        </span>
        </div>
    </div>
  )
}
