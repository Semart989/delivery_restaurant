import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DishesItem from '../DishesItem/DishesItem';
import dishesAT from '../../redux/actionTypes/dishesAT';
import style from '../DishesList/DishesList.module.css'
import ResponsiveAppBar from '../Nav/Nav.jsx';
import CallButton from '../CallButton/CallButton';
import SFooter from '../SFooter/SFooter.jsx';


export default function DishesList() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.dishes.dishes.dishes);

  const { id } = useParams()

  useEffect(() => {
    dispatch({ type: dishesAT.GET_FETCH_DISHES, payload: Number(id) })
  }, [dispatch, id])

  return (
    <>
      <ResponsiveAppBar />
      <div className={style.card}>
        {state && state.map(dish => <DishesItem key={dish.id} dish={dish} />)}
      </div>
      <CallButton />
      <SFooter />
    </>
  );
}
