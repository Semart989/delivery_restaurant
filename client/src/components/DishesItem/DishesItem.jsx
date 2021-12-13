import { Card, CardContent, CardHeader, CardMedia, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import dishesAT from '../../redux/actionTypes/dishesAT';
import styles from '../DishesItem/DishesItem.module.css'

function DishesItem({ dish }) {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch(`http://localhost:4000/categories/${category.id}`)
  //     .then(data => data.json())
  //     .then(data => (dispatch({ type: dishesAT.INIT_DISHES, payload: data })))
  // }, [])

  return (
    <Card className={styles.card}
      sx={{ maxWidth: 345, margin: 4 }}>
      {/* <Link to={`/categories/${category.id}`}> */}
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
      {/* </Link> */}
      <Button
        sx={{ margin: 1 }}
        variant="contained" color="success">
        Добавить
      </Button>
    </Card>
  );
}

export default DishesItem;
