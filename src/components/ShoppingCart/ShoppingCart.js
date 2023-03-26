import React from 'react';

const ShoppingCart = (props) => {
    let shoppingCart ={};
    let cartItems;
    //retrieve data from local storage and show in the UI
    const storedCart = localStorage.getItem('shopping-cart')

    if(storedCart){
        shoppingCart= JSON.parse(storedCart);

        cartItems = props.products.filter(product=>{
            shoppingCart.includes(product.id)
        })


        console.log(cartItems)
        return(
           <h2>hasdas</h2>
        )//end return
    }//end if 
    
    return (
        <div className='col-3 my-3 text-primary sticky-top h-100'>
            <div className="card">
                <h5 style={{borderBottom:"2px solid red"}}>Products in your cart</h5>
                    <p className='bg-danger py-3 text-white fw-bold'>You have Not Added Any Products Yet</p>
            </div>
        </div>
    );
};

export default ShoppingCart;