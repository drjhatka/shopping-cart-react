


const addToCart = (id)=>{
    let shoppingCart ={};
    
    const storedCart= localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }
    
    const quantity= shoppingCart[id];
    if(quantity){
        shoppingCart[id]=shoppingCart[id]+1;
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const deleteFromCart=(id)=>{
    console.log("delete",id)
}

function idExists(objectArray, id){
    let object=objectArray.find((currentObject)=>currentObject.id===id)
    if(typeof object ==="undefined"){
        return false
    }
    return true;
}

export {addToCart, deleteFromCart}