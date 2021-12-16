import React from 'react';
import {useSelector} from 'react-redux'
import DishesItem from '../DishesItem/DishesItem'

function FindDishesList(props) {
  const findedDishes = useSelector(state => state.allDishes.mySearch)
  return (
    <div style={{ display: 'flex', alignContent: 'stretch', flexWrap: 'wrap', justifyContent: 'center'}}>
      {findedDishes && findedDishes.map(dish => <DishesItem key={dish.id} dish={dish} />)}
    </div>
  );
}

export default FindDishesList;
