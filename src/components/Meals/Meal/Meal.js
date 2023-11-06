import React from "react";
import classes from "./Meal.module.css"

const Meal = () => {
    return (
        <div className="classes.Meal">
            <div className="classes.ImgWrap">
                <img src="./img/meals/1.png"/>
            </div>

            <div className="MealInfo">
                <div className="MealTitle">
                    <h1>汉堡包</h1>
                </div>
                <div className="MealDesc">
                    <p>百分百纯牛肉</p>
                </div>
                <div className="MealPrice">
                    <p>12</p>
                </div>
            </div>

        </div>
    )
}

export default Meal