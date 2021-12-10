import './App.css';
import ControlledCarousel from '../Carousel/Carousel'
import ResponsiveAppBar from '../Nav/Nav'
import DishCategory from '../DishCategory/DishCategory'
import SFooter from '../SFooter/SFooter'


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <ControlledCarousel />
      <DishCategory/>
     <SFooter/>
    </div>
  );
}

export default App;
