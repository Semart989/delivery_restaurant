import React, { useEffect } from 'react';

import {Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material/';



// import CategoryItem from '../CategoryItem/CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
// import categoriesAT from '../../redux/actionTypes/categoriesAT';

function MyOrdersList(props) {

//TODO: достать юзера из сессии

const dispatch = useDispatch()
  // const state = useSelector(state => state.categories.categories.categories)

  useEffect(() => {
    fetch('/orders')
      .then(data => data.json())
      .then(data => console.log(data))
      // .then(data => dispatch({ type: categoriesAT.INIT_CATEGORIES, payload: data }))
  }, [dispatch]);

  return (
    <div>
      MyOrdersList
    </div>
  );
}

export default MyOrdersList;
