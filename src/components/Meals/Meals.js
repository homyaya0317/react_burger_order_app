import React from "react";
import Meal from "./Meal/Meal"
import classes from "./Meals.module.css"

const Meals = (props) =>{


    return(

        <div className={classes.Meals}>
           { props.meals.map(meal=><Meal meal={meal} key={meal.id}/>)}
        </div>

    )
}

export default Meals

