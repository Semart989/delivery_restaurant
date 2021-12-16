import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import myOrdersAT from '../../redux/actionTypes/myOrders';
import MyOrderItem from '../MyOrderItem/MyOrderItem';
import ResponsiveAppBar from '../Nav/Nav.jsx';
import CallButton from '../CallButton/CallButton';
import SFooter from '../SFooter/SFooter.jsx';

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
    <>
      <ResponsiveAppBar />
      <div style={{ display: 'flex', alignContent: 'stretch', flexWrap: 'wrap', justifyContent: 'center' }}>
        {state && Object.entries(state).map(([key, value]) => <MyOrderItem key={key} order={value} />)}
        <CallButton />
        <SFooter />
      </div>
    </>
  );
}

export default MyOrdersList;
