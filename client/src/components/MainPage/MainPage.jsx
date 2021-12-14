import React from 'react';
import ControlledCarousel from '../Carousel/Carousel'
import CategoryList from '../CategoryList/CategoryList'
import SFooter from '../SFooter/SFooter'

function MainPage(props) {
  return (
    <div>
      <ControlledCarousel />
      <CategoryList />
      <SFooter/>
    </div>
  );
}

export default MainPage;
