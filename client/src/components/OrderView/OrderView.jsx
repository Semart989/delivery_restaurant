import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import cartAT from '../../redux/actionTypes/cartAT';

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

export default function OrderView() {

  const user = useSelector((state) => state.user.user);
  const totalCart = useSelector((state) => state.cart.cart);
  const totalSum = totalCart.reduce((a, b) => a + b.price, 0);
  const totalQuantity = totalCart.reduce((a, b) => a + b.quantity, 0);
  const history = useHistory();

  const dispatch = useDispatch();

  const sendOrder = (event) => {
    event.preventDefault();

    dispatch({ type: cartAT.POST_SEND_ORDER, payload: {totalCart, totalSum, totalQuantity, user} });

    history.push('/orders');
  }

  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>

      <Grid container spacing={2}>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                ОБЩАЯ СУММА ЗАКАЗА:
              </Typography>
              <Typography variant="body2" gutterBottom>
                Количество блюд: {totalQuantity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={() => sendOrder} variant="contained" color="success">
                ОФОРМИТЬ ЗАКАЗ
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {totalSum} руб.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
