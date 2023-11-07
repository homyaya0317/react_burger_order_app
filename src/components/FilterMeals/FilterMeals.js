import React, { useEffect, useState } from "react";
import classes from "./FilterMeals.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"

const FilterMeals = (props) => {

    const[keyword,setKeyword] = useState("")


    const keywordChangeHandler = (e) =>{
        setKeyword(e.target.value.trim())
    }

    useEffect(()=>{

        const timer = setTimeout(()=>{
            props.onFilter(keyword)

        },1000)

        return ()=>{
            clearTimeout(timer)

        } 

    },[keyword])





    return (
        <div className={classes.FilterMeals}>
            <div className={classes.FilterBox}>
                <input onChange ={keywordChangeHandler} value={keyword} className={classes.SearchInput} type="text" placeholder="please enter keyword"/>
                
                <FontAwesomeIcon className={classes.FilterIcon} icon={faSearch}/>

            </div>

        </div>
    )
}

export default FilterMeals