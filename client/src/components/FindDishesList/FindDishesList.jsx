import React from 'react';
import { useSelector } from 'react-redux'
import DishesItem from '../DishesItem/DishesItem'
import ResponsiveAppBar from '../Nav/Nav.jsx';
import CallButton from '../CallButton/CallButton';
import SFooter from '../SFooter/SFooter.jsx';

function FindDishesList(props) {

  const findedDishes = useSelector(state => state.allDishes.mySearch)

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ display: 'flex', alignContent: 'stretch', flexWrap: 'wrap', justifyContent: 'center' }}>
        {findedDishes && findedDishes.map(dish => <DishesItem key={dish.id} dish={dish} />)}
      </div>
      <CallButton />
      <SFooter />
    </>
  );
}

export default FindDishesList;
