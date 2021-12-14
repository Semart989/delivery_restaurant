import * as React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cartAT from '../../redux/actionTypes/cartAT';

export default function OrderView() {

  const user = useSelector((state) => state.user.user);
  const totalCart = useSelector((state) => state.cart.cart);
  const totalSum = totalCart.reduce((a, b) => a + b.price, 0);
  const totalQuantity = totalCart.reduce((a, b) => a + b.quantity, 0);
  // время заказа
  const allOrdersTime = useSelector((state) => state.cart.cart);
  const orderTime = allOrdersTime.map(dish => dish.time).sort((a, b) => b - a)[0];

  const history = useHistory();
  const dispatch = useDispatch();

  const sendOrder = (event) => {
    event.preventDefault();
    dispatch({ type: cartAT.POST_SEND_CART, payload: { totalCart, totalSum, totalQuantity, user } });

    // чистим LocalStorage после оформления заказа
    localStorage.clear();

    history.push('/orders');
  }
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>

      <Grid container >

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs >
              <Typography variant="body1" component="div">
                ОБЩАЯ СУММА ЗАКАЗА:
              </Typography>

              <Grid item>
                <Typography variant="body1" component="div">
                  {totalSum} руб.
                </Typography>
              </Grid>

              <Typography variant="body2" gutterBottom>
                Количество блюд: {totalQuantity}
              </Typography>

              {orderTime &&
              <Typography variant="body2" color="text.secondary">
                Время доставки: {orderTime + 5} минут
              </Typography>}
              
            </Grid>
            <Grid item>
              <Button onClick={sendOrder} variant="contained" color="success">
                ОФОРМИТЬ ЗАКАЗ
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
