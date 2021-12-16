import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';


// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom';
import styles from '../DishesItem/DishesItem.module.css'
// import IconButton from '@mui/material/IconButton';
// import { styled } from '@mui/material/styles';
// import Collapse from '@mui/material/Collapse';
// import cartAT from '../../redux/actionTypes/cartAT';

function MyOrderItem({ order }) {
  return (
    <Card className={styles.card}
      sx={{ maxWidth: 345, margin: 4, justifyContent: 'space-between' }}>
      {/* <Link to={`/categories/${categoryID}/${dish.id}`}> */}
      <CardHeader
        title={`№ заказа ${order[0]['Orders.id']}`}
      />
      <Typography variant="body1" color="text.secondary">
        {/* {order[0]['Orders.currentStatus']} */}
        {`Статус: ${order[0]['Orders.currentStatus']}`}
      </Typography>
      {order.map(dish => {
        return <CardMedia
          component="img"
          // maxHeight="50"
          maxWidth="50"
          image={dish.picture}
          alt="Food"
        />
      })}

      <CardContent>
        <Typography variant="body2" color="text.primary">
          {order[0]['Orders.totalSum']} ₽
        </Typography>
      </CardContent>
      <CardContent>

      </CardContent>
    </Card>
  );
}

export default MyOrderItem;
