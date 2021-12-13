import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishesItem from '../DishesItem/DishesItem';
import dishesAT from '../../redux/actionTypes/dishesAT';
import { useParams } from 'react-router-dom';

export default function DishesList() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.dishes.dishes.dishes);

  const { id } = useParams()

  useEffect(() => {
      dispatch({ type: dishesAT.GET_FETCH_DISHES, payload: Number(id) })
  }, [dispatch, id])

  return (

    <>
      {state && state.map(dish => <DishesItem key={dish.id} dish={dish} />)}
    </>

  );
}
