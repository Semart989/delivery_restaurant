
// import ViewContainer from '../ViewContainer/ViewContainer';


import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import store from '../../redux/store';

// import AdminCardOrder from '../AdminCardOrder/AdminCardOrder';
// import AdminEditCardOrder from '../AdminEditCardOrder/AdminEditCardOrder';

import LoginWrapper from '../LoginWrapper/LoginWrapper';
import MainPage from '../MainPage/MainPage'
import CartList from '../CartList/CartList'
import ResponsiveAppBar from '../Nav/Nav'
import CategoryList from '../CategoryList/CategoryList';
import DishesList from '../DishesList/DishesList';
import MyOrdersList from '../MyOrdersList/MyOrdersList';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <LoginWrapper>
          <BrowserRouter>
        
            <ResponsiveAppBar />

            <Switch>

              <Route path="/" exact component={MainPage} />
              <Route path="/cart" exact component={CartList} />
              <Route path="/categories" exact component={CategoryList} />
              <Route path="/categories/:id" exact component={DishesList} />
              <Route path="/orders" exact component={MyOrdersList} />

            </Switch>

          </BrowserRouter>
        </LoginWrapper>
        
      </Provider>

    </div>
  );
}

export default App;
