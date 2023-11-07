import React, { useContext, useState } from "react";
import classes from "./CartDetails.module.css"
import Meal from "../../Meals/Meal/Meal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import CartContext from "../../../store/CartContext";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () =>{


    const ctx = useContext(CartContext)

    const [showConfirm,setShowConfirm] = useState(false)

    const showConfirmHandler = () => {
        setShowConfirm(true)
    }

    const cancelHandler = (e) => {
        e.stopPropagation()
        setShowConfirm(false)
    }

    const yesHandler = (e)=> {
        
        ctx.clearCart()
        setShowConfirm(false)

    }


    return (

        <Backdrop>

            {showConfirm && <Confirm confirmText={"Are you sure to clear all items in the cart?"} onYes = {yesHandler} onCancel={cancelHandler} />}

            <div className={classes.CartDetails} onClick={e=>e.stopPropagation() }>
            <div className={classes.Header}>
                <h4 className={classes.Title}>Cart Items</h4>

                <div className={classes.Clear} onClick={showConfirmHandler} >
                <FontAwesomeIcon icon={faTrash}/>
                <span className={classes.Clear}>Clear Cart</span>

                </div>
                
            </div>

            <div className={classes.List}>
                {ctx.item.map(meal=><Meal noDesc key={meal.id} meal={meal}/>)}
               
            </div>

        </div>

        </Backdrop>
        
    )
}

export default CartDetails