import React from 'react';
import ControlledCarousel from '../Carousel/Carousel'
import CategoryList from '../CategoryList/CategoryList'
import SearchDishes from '../SearchDishes/SearchDishes';

function MainPage(props) {
  return (
    <div>
      <SearchDishes/>
      <ControlledCarousel />
      <CategoryList />
    </div>
  );
}

export default MainPage;
