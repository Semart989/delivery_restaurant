import React from 'react';
import ControlledCarousel from '../Carousel/Carousel'
import CategoryList from '../CategoryList/CategoryList'
import SearchDishes from '../SearchDishes/SearchDishes';
import ResponsiveAppBar from '../Nav/Nav.jsx';
import SFooter from '../SFooter/SFooter'
import CallButton from '../CallButton/CallButton'

function MainPage(props) {
  return (
    <div>
      <ResponsiveAppBar/>
      <SearchDishes />
      <ControlledCarousel />
      <CategoryList />
      <CallButton />
      <SFooter />
    </div>
  );
}

export default MainPage;
