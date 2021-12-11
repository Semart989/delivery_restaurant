import React from 'react';

import ControlledCarousel from '../Carousel/Carousel'
import DishCategory from '../DishCategory/DishCategory'

function MainPage(props) {
  return (
    <div>
      <ControlledCarousel />
      <DishCategory />
    </div>
  );
}

export default MainPage;
