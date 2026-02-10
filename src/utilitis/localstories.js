const getCartFromLocalstore =()=>{
    const storedCardString = localStorage.getItem("cart")
    if (storedCardString) {
        const storedCard = JSON.parse(storedCardString)
        return storedCard;

    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringify);
};



const addItmesToCartStorage = (id) =>{
    const cart = getCartFromLocalstore();
    const newCart = [...cart, id];
    saveCartToLocalStorage(newCart);
}


export {
    getCartFromLocalstore as getStoreCart ,
     addItmesToCartStorage as addIdtoStoredCart

    }