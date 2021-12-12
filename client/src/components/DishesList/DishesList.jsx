import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CategoryItem from '../CategoryItem/CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import categoriesAT from '../../redux/actionTypes/categoriesAT';
import DishesItem from '../DishesItem/DishesItem';
import dishesAT from '../../redux/actionTypes/dishesAT';
import { useParams } from 'react-router-dom';

export default function DishesList() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.dishes.dishes.dishes)
const {id} = useParams()
  console.log(state,);

  useEffect(() => {
    fetch(`http://localhost:4000/categories/${id}`)
      .then(data => data.json())
      .then(data => (dispatch({ type: dishesAT.INIT_DISHES, payload: data })))
  }, [])

  return (

    <>
      {state && state.map(dish => <DishesItem key={dish.id} dish={dish} />)}
    </>

  );
}
