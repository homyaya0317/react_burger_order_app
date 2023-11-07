import React from "react";
import classes from "./Meal.module.css"
import Counter from "../../UI/Counter/Counter";

const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgWrap}>
                <img src={props.meal.img}/>
            </div>

            <div className={classes.MealInfo}>
     
                <h3 className={classes.MealTitle}>{props.meal.title}</h3>
                
                {props.noDesc? null: <p className={classes.MealDesc}>{props.meal.desc}</p>}
                
                <div className={classes.MealPrice}>
                    <p className={classes.Price}>{props.meal.price}</p>
                    <Counter meal={props.meal}/>
                    
                </div>
            </div>

        </div>
    )
}

export default Meal