import { Card, CardContent, CardHeader, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import styles from '../DishesItem/DishesItem.module.css'
import cartAT from '../../redux/actionTypes/cartAT';

function DishesItem({ dish }) {

  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.dishes.categoryID);

  const addToCart = (event) => {
    event.preventDefault();
    dispatch({ type: cartAT.INCREMENT_CART, payload: dish });
  };

  return (
    <Card className={styles.card}
      sx={{ maxWidth: 345, margin: 4 }}>
      <Link to={`/categories/${categoryID}/${dish.id}`}>
        <CardHeader
          title={dish.name}
        />
        <CardMedia
          component="img"
          maxHeight="200"
          maxWidth="200"
          image={dish.picture}
          alt="Food"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {dish.price} ₽
          </Typography>
        </CardContent>
        <Button
          sx={{ margin: 1 }}
          variant="contained" color="success"
          onClick={addToCart}>
          В корзину
        </Button>
      </Link>
    </Card>
  );
}

export default DishesItem;
