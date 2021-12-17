import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography, Button } from '@mui/material';



import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom';

import styles from '../DishesItem/DishesItem.module.css'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import cartAT from '../../redux/actionTypes/cartAT';


function DishesItem({ dish }) {

  const dispatch = useDispatch();

  const addToCart = (event) => {
    event.preventDefault();
    dispatch({ type: cartAT.INCREMENT_CART, payload: {...dish} });
  }
  // Разворачиваем состав блюда

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    // marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  }));

  // const categoryID = useSelector(state => state.dishes.categoryID)

  // console.log(categoryID)

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);

  };

  return (
    <Card className={styles.card}
      sx={{ maxWidth: 350, margin: 2, justifyContent: 'space-between', borderRadius: 3 }}>
      {/* <Link to={`/categories/${categoryID}/${dish.id}`}> */}
      <CardHeader
        title={dish.name}
        sx={{ minHeight: 86 }}
      />
      <CardMedia
       sx={{ minHeight: 145 }}
        component="img"
        image={dish.picture}
        alt="Food"
      />

      <CardContent>
        <Typography variant="h5" color="text.primary" style={{ marginBottom: -20 }}>
          {dish.price} ₽
        </Typography>
      </CardContent>

      <CardContent  sx={{ minHeight: 200 }}>
        <Typography paragraph>
          {dish.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Button
          sx={{ margin: 1 }}
          onClick={addToCart}
          variant="contained" color="success">
          В корзину
        </Button>


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Состав"
        >
          <Button variant="outlined">Состав</Button>

        </ExpandMore>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary">Состав: {dish.ingredients}</Typography>
          </CardContent>
        </Collapse>
      </CardContent>

    </Card>

  );
}

export default DishesItem
