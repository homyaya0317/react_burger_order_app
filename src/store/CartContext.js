import React from "react";


const CartContext = React.createContext({

    item:[],
    totalPrice:"",
    totalCount:"",
    addCart:()=>{

    },
    removeCart:()=>{
        
    },
    clearCart:() => {
        
    }


})

export default CartContext