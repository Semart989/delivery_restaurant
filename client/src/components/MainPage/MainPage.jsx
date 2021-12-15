import React from 'react';
import ControlledCarousel from '../Carousel/Carousel'
import CategoryList from '../CategoryList/CategoryList'
import SFooter from '../SFooter/SFooter'
import SearchDishes from '../SearchDishes/SearchDishes';

function MainPage(props) {
  return (
    <div>
      <SearchDishes/>
      <ControlledCarousel />
      <CategoryList />
      <SFooter/>
    </div>
  );
}

export default MainPage;
