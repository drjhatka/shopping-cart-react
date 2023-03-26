import React from 'react';
import "./Product.css";

const Product = (props) => {
    // console.log(props.product)
    const {id,title, image, description, category,price}= props.product;
    return (
        <div className="col-10 col-md-4 my-3">
            <div className='card py-2' style={{height:"80vh"}}>
                <img src={image} className="card_image" alt="" />
                <div className="card-body">
                    <div className='title' >{title}</div>
                    <p className='text-success fw-bolder price'>Price {price}</p>
                    <button className='btn btn-primary mx-4 btn-sm'>Add to Cart</button>
                    <button className='btn btn-danger btn-sm'>Delete From Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;