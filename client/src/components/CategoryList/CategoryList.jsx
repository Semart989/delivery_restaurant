import React, { useEffect } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import categoriesAT from '../../redux/actionTypes/categoriesAT';

export default function CategoryList() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.categories.categories.categories)

  useEffect(() => {
    dispatch({ type: categoriesAT.GET_FETCH_CATEGORIES });
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', alignContent: 'stretch', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 80}}>
      {state && state.map(category => <CategoryItem key={category.id} category={category} />)}
    </div>
  );
}
