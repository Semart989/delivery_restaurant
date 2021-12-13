import { Card, CardContent, CardHeader, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import styles from '../DishesItem/DishesItem.module.css'

function DishesItem({ dish }) {

  const categoryID = useSelector(state => state.dishes.categoryID)

  console.log(categoryID)

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
          variant="contained" color="success">
          Добавить
        </Button>
      </Link>
    </Card>
  );
}

export default DishesItem;
