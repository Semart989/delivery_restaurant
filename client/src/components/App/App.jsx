import './App.css';
// import Navigation from '../Navigation/Navigation'
import ControlledCarousel from '../Carousel/Carousel'
import ResponsiveAppBar from '../Nav/Nav'
import StickyFooter from '../Footer/Footer'
import DishCategory from '../DishCategory/DishCategory'


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <ControlledCarousel />
      <DishCategory/>
      <StickyFooter/>
    </div>
  );
}

export default App;
