import React, { useEffect } from 'react';

// import {Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material/';



// import CategoryItem from '../CategoryItem/CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import myOrdersAT from '../../redux/actionTypes/myOrders';
import MyOrderItem from '../MyOrderItem/MyOrderItem';
// import categoriesAT from '../../redux/actionTypes/categoriesAT';

function MyOrdersList() {

  const state = useSelector(state => state.myOrders.myOrders)

  //TODO: достать юзера из сессии

  const dispatch = useDispatch()
  // const state = useSelector(state => state.categories.categories.categories)

  useEffect(() => {
    fetch('/orders')
      .then(data => data.json())
      // .then(data => console.log(data))
      .then(data => dispatch({ type: myOrdersAT.INIT_MY_ORDERS, payload: data.objOrders }))
  }, []);

  return (
    <div style={{ display: 'flex', alignContent: 'stretch', flexWrap: 'wrap', justifyContent: 'center'}}>
      {state && Object.entries(state).map(([key, value]) => <MyOrderItem key={key} order={value}  />)}
    </div>

  );
}

export default MyOrdersList;
