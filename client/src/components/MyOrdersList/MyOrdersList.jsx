import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import myOrdersAT from '../../redux/actionTypes/myOrders';
import MyOrderItem from '../MyOrderItem/MyOrderItem';
import ResponsiveAppBar from '../Nav/Nav.jsx';
import CallButton from '../CallButton/CallButton';
import SFooter from '../SFooter/SFooter.jsx';

function MyOrdersList() {

  const state = useSelector(state => state.myOrders.myOrders)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/orders')
      .then(data => data.json())
      .then(data => dispatch({ type: myOrdersAT.INIT_MY_ORDERS, payload: data.objOrders }))
  }, [dispatch]);
  
// console.log(Object.entries(state));
// console.log(1234);
  return (

    <>
      <ResponsiveAppBar />
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: 60 }}>
        {state && Object.entries(state).map(([key, value]) => <MyOrderItem key={key} order={value} />)}
      </div>
      <CallButton />
      <SFooter />
    </>

  );
}

export default MyOrdersList;
