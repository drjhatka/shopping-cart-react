import React, { useState, useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Product from './../Product/Product';

const Products = () => {
   const [products, setProducts]=useState([])  
    useEffect( ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
      
    return (
        <div className='row'>
            <div className="col-12 col-md-9">
                <div className='row'>
                    {products.map(product=> <Product product={product} key={product.id} ></Product>)}
                </div>
            </div>
            
            <ShoppingCart products={products}></ShoppingCart>
        </div>
    );
};

export default Products;