import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import ResponsiveAppBar from '../Nav/Nav.jsx';
import CallButton from '../CallButton/CallButton';
import SFooter from '../SFooter/SFooter.jsx';
import categoriesAT from '../../redux/actionTypes/categoriesAT';
import style from '../CategoryList/CategoryList.module.css';

export default function CategoryList() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.categories.categories.categories)

  useEffect(() => {
    dispatch({ type: categoriesAT.GET_FETCH_CATEGORIES });
  }, [dispatch]);
  const router = useLocation()

  return (
    <>
    {router.pathname !== '/' ?
      <ResponsiveAppBar />
    : null
    }
      <div className={style.card}>
        {state && state.map(category => <CategoryItem key={category.id} category={category} />)}
      </div>
      <CallButton />
      <SFooter />
    </>
  );
}
