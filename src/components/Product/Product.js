import React from 'react';
import { addToCart, deleteFromCart } from '../utilities/data-operation';
import "./Product.css";

const Product = (props) => {

    const {id,title, image, description, category,price}= props.product;
    return (
        <div className="col-10 col-md-4 my-3">
            <div className='card py-2' >
                <img src={image} className="card_image" alt="" />
                <div className="card-body">
                    <div className='title' >{title}</div>
                    <p className='text-success fw-bolder price'>Price {price}</p>
                    <h3>ID: {id}</h3>
                    <button onClick={()=>addToCart(id)} className='btn btn-primary mx-4 btn-sm'>Add to Cart</button>
                    <button onClick={()=>{deleteFromCart(id)}} className='btn btn-danger btn-sm'>Delete From Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;