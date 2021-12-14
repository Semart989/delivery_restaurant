import React from 'react';
import ControlledCarousel from '../Carousel/Carousel'
import CategoryList from '../CategoryList/CategoryList'
import SearchAppBar from '../SearchAppBar/SearchAppBar';
import SFooter from '../SFooter/SFooter'

function MainPage(props) {
  return (
    <div>
      <SearchAppBar/>
      <ControlledCarousel />
      <CategoryList />
      <SFooter/>
    </div>
  );
}

export default MainPage;
