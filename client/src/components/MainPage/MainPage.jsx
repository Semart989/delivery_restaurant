import React from 'react';
import ControlledCarousel from '../Carousel/Carousel'
import DishCategory from '../DishCategory/DishCategory'
import SFooter from '../SFooter/SFooter'

function MainPage(props) {
  return (
    <div>
      <ControlledCarousel />
      <DishCategory />
      <SFooter/>
    </div>
  );
}

export default MainPage;
