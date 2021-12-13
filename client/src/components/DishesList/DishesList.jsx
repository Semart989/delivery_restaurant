import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishesItem from '../DishesItem/DishesItem';
import dishesAT from '../../redux/actionTypes/dishesAT';
import { useParams } from 'react-router-dom';

export default function DishesList() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.dishes.dishes.dishes)

  const { id } = useParams()

  useEffect(() => {
    fetch(`/categories/${id}`)
      .then(data => data.json())
      .then(data => (dispatch({ type: dishesAT.INIT_DISHES, payload: {data, categoryID:+id} })))
  }, [dispatch, id])

  return (

    <div style={{ display: 'flex', alignContent: 'stretch', flexWrap: 'wrap', justifyContent: 'center'}}>
      {state && state.map(dish => <DishesItem key={dish.id} dish={dish} />)}
    </div>

  );
}
