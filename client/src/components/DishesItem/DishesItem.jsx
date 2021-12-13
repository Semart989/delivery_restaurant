import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import dishesAT from '../../redux/actionTypes/dishesAT';

function DishesItem({dish}) {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch(`http://localhost:4000/categories/${category.id}`)
  //     .then(data => data.json())
  //     .then(data => (dispatch({ type: dishesAT.INIT_DISHES, payload: data })))
  // }, [])

  return (
    <Card 
    sx={{ maxWidth: 345, margin: 4}}>
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
 Текст
        </Typography>
      </CardContent>
      {/* </Link> */}
    </Card>
  );
}

export default DishesItem;
