import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shpo = () => {
    const[products, setProdects]=useState([])
    const [cart, setCart]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProdects(data))
    },[]);
    
    const handleAddToCart =(product)=>{
        console.log('clicked', product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    console.log(cart)
    return (
        <div className='shpo-container'>
            <div className="porducts-container">
              
                {
                    products.map(product =><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="card-container">
                <h1>This is Order Summary</h1>
                <p>Selected Items: {cart.length}</p>
                
            </div>
        </div>
    );
};

export default Shpo;