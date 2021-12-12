import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CategoryItem from '../CategoryItem/CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import categoriesAT from '../../redux/actionTypes/categoriesAT';

export default function CategoryList() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.categories.categories.categories)

  console.log(state,);

  useEffect(() => {

    fetch('http://localhost:4000/categories')
      .then(data => data.json())
      .then(data => dispatch({ type: categoriesAT.INIT_CATEGORIES, payload: data }))
  }, []);

  return (

    <>
      {state && state.map(category => <CategoryItem key={category.id} category={category} />)}
    </>

  );
}
