import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const{name, img, seller, price, ratings}=props.product;
    const {handleAddToCart} = props;
    
    return (
        <div className='product-container'>
            <img src={img} alt="" />
           
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small> </p>
            <p><small>Rating : {ratings}</small> </p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                
            </button>
        </div>
    );
};

export default Product;