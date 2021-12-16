import React from 'react';
import { useSelector } from 'react-redux';
import CartView from '../CartView/CartView.jsx';
import OrderView from '../OrderView/OrderView.jsx';
import ResponsiveAppBar from '../Nav/Nav.jsx';
import CallButton from '../CallButton/CallButton';
import SFooter from '../SFooter/SFooter.jsx';

function CartList() {

  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="">
      <ResponsiveAppBar />
      <h1 style={{ marginTop: "15px" }}>Корзина</h1>
      {cart.map((product) => <CartView key={product.id} product={product} />)}
      <OrderView />
      <CallButton />
      <SFooter />
    </div>
  );
}

export default CartList;
