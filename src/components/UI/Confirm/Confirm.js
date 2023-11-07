import React from "react"
import classes from "./Confirm.module.css"
import Backdrop from "../Backdrop/Backdrop"

const Confirm = (props) => {



    return (

        <Backdrop 
        className={classes.ConfirmOuter} 
        onClick={(e)=>props.onCancel(e)}>
            <div className={classes.Confirm} onClick={(e)=>props.onCancel(e)} >
                <div className={classes.Text}>
                    {props.confirmText}
                </div>

                <div>
                    <button className={classes.Yes} onClick={(e) => props.onYes(e)}>Yes</button>
                    <button className={classes.No} onClick={(e) => props.onCancel(e)}>Cancel</button>
                </div>
            </div>

        </Backdrop>

    )
}

export default Confirm