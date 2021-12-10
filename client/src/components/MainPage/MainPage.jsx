import React from 'react';
import ControlledCarousel from '../Carousel/Carousel'
import ResponsiveAppBar from '../Nav/Nav'
import DishCategory from '../DishCategory/DishCategory'
import SFooter from '../SFooter/SFooter'

function MainPage(props) {
  return (
    <div>
      <ResponsiveAppBar />
      <ControlledCarousel />
      <DishCategory />
      <SFooter />
    </div>
  );
}

export default MainPage;
