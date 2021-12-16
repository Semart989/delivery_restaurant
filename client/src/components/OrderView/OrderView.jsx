import * as React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cartAT from '../../redux/actionTypes/cartAT';
import style from './OrderView.module.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function OrderView() {

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  }));

  const user = useSelector((state) => state.user.user);
  const totalCart = useSelector((state) => state.cart.cart);
  const totalSum = totalCart.reduce((a, b) => a + b.price, 0);
  const totalQuantity = totalCart.reduce((a, b) => a + b.quantity, 0);
  // время заказа
  const allOrdersTime = useSelector((state) => state.cart.cart);
  const orderTime = allOrdersTime.map(dish => dish.time).sort((a, b) => b - a)[0];

  const dispatch = useDispatch();
  const [alert, setAlert] = React.useState('');

  const sendOrder = (event) => {
    event.preventDefault();
    dispatch({ type: cartAT.POST_SEND_CART, payload: { totalCart, totalSum, totalQuantity, user } });
    
    // чистим LocalStorage после оформления заказа
    localStorage.clear();

    // history.push('/orders');

    setAlert(() => {
      return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">Ваш заказ принят!</Alert>
        </Stack>
      )
    })

  }

  return (
    <Paper 
    sx={{ p: 2, margin: 'auto', marginBottom: 10,  maxWidth: 600, flexGrow: 1, borderRadius: 3 }}>  
      {totalCart.length < 1
        ? <div>

            {alert === '' ? <Div>{"Ваша корзина пока что пустая"}</Div> : <div>{alert}</div>}
            <Link to='/categories'
              className={style.link}
              >
              <Button
                sx={{ margin: 1 }}
                variant="contained" color="success">
                Перейти в меню
              </Button>
            </Link>
          </div>
        :
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
      }
    </Paper>
  );
}


