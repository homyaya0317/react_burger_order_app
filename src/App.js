import React, { useState } from "react";
import Meals from "./components/Meals/Meals"

import CartContext from "./store/CartContext";
import Cart from "./components/Cart/Cart";
import FilterMeals from "./components/FilterMeals/FilterMeals";

const MEALS_DATA = [
  {
    id: '1',
    title: 'Hamburger',
    desc: '100% pure beef with crispy pickles, diced onions, and delicious tomato sauce. Classic flavor you can not resist!',
    price: 12,
    img: '/img/meals/1.png'
  },
  {
    id: '2',
    title: 'Double Cheeseburger',
    desc: '100% pure beef with double layers of creamy cheese, soft buns, and tasty condiments. Irresistibly tempting!',
    price: 20,
    img: '/img/meals/2.png'
  },
  {
    id: '3',
    title: 'Big Mac',
    desc: 'Two pieces of 100% pure beef, fresh ingredients like lettuce, onions, and more, create a rich and delicious taste experience!',
    price: 24,
    img: '/img/meals/3.png'
  },
  {
    id: '4',
    title: 'Spicy McChicken',
    desc: 'Crispy and spicy golden coating, tender and smooth chicken thigh meat, a multi-flavored delight to satisfy your taste buds!',
    price: 21,
    img: '/img/meals/4.png'
  },
  {
    id: '5',
    title: 'McChicken Deluxe',
    desc: 'Boneless chicken patty, tender and juicy, paired with fresh lettuce and rich McChicken sauce, offering a delightful taste experience!',
    price: 22,
    img: '/img/meals/5.png'
  },
  {
    id: '6',
    title: 'McChicken Classic',
    desc: 'Crisp and refreshing lettuce, golden and crispy chicken meat. A nutritious combination, a tasty and healthy choice!',
    price: 14,
    img: '/img/meals/6.png'
  },
  {
    id: '7',
    title: 'Cheeseburger',
    desc: '100% pure beef with creamy cheese, combined with delicious tomato sauce, for a rich and satisfying flavor with every bite!',
    price: 12,
    img: '/img/meals/7.png'
  }
];





function App() {

  const [mealsData, setMealsData] = useState(MEALS_DATA)

  const filterHandler = (keyword) => {
    keyword = keyword.toLowerCase();
    const newMealsData = MEALS_DATA.filter(item => item.title.toLowerCase().indexOf(keyword) !== -1);
    setMealsData(newMealsData);
};




  const [cartData, setCartData] = useState({
    item: [],
    totalPrice: 0,
    totalCount: 0,
  })


  const addCart = (meal) => {

    const newCartData = {...cartData}

    if(newCartData.item.find(item=>item===meal)){
        meal.amount += 1
    }else{

      newCartData.item.push(meal)
      meal.amount = 1

    }

    newCartData.totalPrice += meal.price
    newCartData.totalCount += 1

    setCartData(newCartData)

  }

  const removeCart = (meal) => {
    const newCartData = {...cartData}

    const targetMeal = newCartData.item.find(item=>item==meal)

    
    targetMeal.amount--

    if(targetMeal.amount === 0){
      newCartData.item.splice(newCartData.item.indexOf(meal),1)
    }

    newCartData.totalPrice -= meal.price
    newCartData.totalCount -= 1

   
    setCartData(newCartData)
  
  }

  const clearCart = () => {
    const newCartData = {...cartData}

    newCartData.item.forEach(item=>delete item.amount)
    newCartData.item = [];
    newCartData.totalCount = 0;
    newCartData.totalPrice = 0;
    setCartData(newCartData)

  }


  return (

    <CartContext.Provider value={{...cartData,addCart,removeCart,clearCart}}>
      <div>
        <FilterMeals onFilter = {filterHandler}/>
        <Meals meals={mealsData} />
        <Cart/>
      </div>

    </CartContext.Provider>

  );
}
export default App;
