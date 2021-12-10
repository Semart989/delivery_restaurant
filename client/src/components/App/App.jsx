import './App.css';

import ControlledCarousel from '../Carousel/Carousel'
import ResponsiveAppBar from '../Nav/Nav'
import DishCategory from '../DishCategory/DishCategory'
import SFooter from '../SFooter/SFooter'
import { Provider } from 'react-redux';
import store from '../../redux/store';
import LoginWrapper from '../LoginWrapper/LoginWrapper';


import MainPage from '../MainPage/MainPage'
import CartList from '../CartList/CartList'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {


  return (
    <div className="App">

      <Provider store={store}>
        <LoginWrapper>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={MainPage}/>
              <Route path="/cart" exact component={CartList}/>
            </Switch>
          </BrowserRouter>
        </LoginWrapper>
        
      </Provider>



    </div>
  );
}

export default App;
