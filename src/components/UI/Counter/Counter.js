import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Counter.module.css"
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/CartContext";


const Counter = (props) => {


    const ctx = useContext(CartContext)


    const onAdd = () => {
        ctx.addCart(props.meal)
    }

    const onRemove = () => {
        ctx.removeCart(props.meal)
    }




    return (
        <div className={classes.Counter}>


            {(props.meal.amount && props.meal.amount !== 0)?  <>
            <button onClick={onRemove} className={classes.Minus}><FontAwesomeIcon icon={faMinus}/></button>
            <span className={classes.Count}>{props.meal.amount}</span>
            </> :null}

            <div>
                <button onClick={onAdd} className={classes.Plus}><FontAwesomeIcon icon={faPlus}/></button>
                
            </div>





        </div>
    )
}

export default Counter