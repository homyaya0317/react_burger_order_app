import React, { useContext, useEffect, useState }  from "react";
import bagIcon from "../../asset/bag.png"
import classes from "./Cart.module.css"
import CartContext from "../../store/CartContext";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";


const Cart = () => {

    const ctx = useContext(CartContext)

    const [showCartDetails,setShowCartDetails] = useState(false)

    const [showCheckout, setShowCheckout] = useState(false)


    const showCheckoutHandler = () => {
       
    
        if(ctx.totalCount ===0) return;
        setShowCheckout(true)
    }

    const hideCheckoutHandker = () => {
        setShowCheckout(false)

    }

    const toggleDetailHandler = () =>{
        if(ctx.totalCount === 0){
            setShowCartDetails(false)
            return
        }
        
        setShowCartDetails(prevState=>!prevState)
    }


    useEffect(()=>{
        if(ctx.totalCount === 0){
           setShowCartDetails(false)

        }

    },[ctx])

    return (

        <div onClick = {toggleDetailHandler} className={classes.Cart}>

            {showCheckout && <Checkout onHide= {hideCheckoutHandker}/>}

           {showCartDetails && <CartDetails/>} 
            <div className={classes.ImgWrap}>
                <img src={bagIcon}/>
                {ctx.totalCount!==0? <span className={classes.TotalAmount}>{ctx.totalCount}</span>:null} 
            </div>
           
            {ctx.totalCount!==0? <p className={classes.Price}>{ctx.totalPrice}</p> : <p className={classes.NoItem}>Items Not Selected</p>}
            <button onClick={showCheckoutHandler} className = {`${classes.Button} ${ctx.totalCount === 0? classes.Disabled : " "}`}>Checkout</button>
        </div>
    )

}

export default Cart 