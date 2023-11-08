import React from "react";


const CartContext = React.createContext({

    item:[],
    totalPrice:"",
    totalCount:"",
    cartDispatch:()=>{
        
    }

})

export default CartContext