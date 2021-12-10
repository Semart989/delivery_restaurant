import './App.css';
import ControlledCarousel from '../Carousel/Carousel'
import ResponsiveAppBar from '../Nav/Nav'
import DishCategory from '../DishCategory/DishCategory'
import SFooter from '../SFooter/SFooter'
import { Provider } from 'react-redux';
import store from '../../redux/store';
import LoginWrapper from '../LoginWrapper/LoginWrapper';


function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <LoginWrapper>
          <ResponsiveAppBar />
          <ControlledCarousel />
          <DishCategory />
          <SFooter />
        </LoginWrapper>
      </Provider>
    </div>
  );
}

export default App;
