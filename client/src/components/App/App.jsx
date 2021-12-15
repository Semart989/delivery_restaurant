
// import ViewContainer from '../ViewContainer/ViewContainer';


import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

// import AdminCardOrder from '../AdminCardOrder/AdminCardOrder';
// import AdminEditCardOrder from '../AdminEditCardOrder/AdminEditCardOrder';

import LoginWrapper from '../LoginWrapper/LoginWrapper';
import MainPage from '../MainPage/MainPage'
import CartList from '../CartList/CartList'
import ResponsiveAppBar from '../Nav/Nav'
import CategoryList from '../CategoryList/CategoryList';
import DishesList from '../DishesList/DishesList';
import MyOrdersList from '../MyOrdersList/MyOrdersList';
import FindDishesList from '../FindDishesList/FindDishesList';
import SFooter from '../SFooter/SFooter';

function App() {
  // вытягиваем массив товаров из корзины клиента
  const cart = useSelector((state) => state.cart.cart)

  // при изменении состояния корзины 
  // дублируем массив товаров в LocalStorage c key = 'user_cart'
  useEffect(
    () => {
      localStorage.setItem('user_cart', JSON.stringify(cart));
    }, [cart]
  );

  return (
    <div className="App">
      <LoginWrapper>
        <BrowserRouter>

          <ResponsiveAppBar />

          <Switch>

            <Route path="/" exact component={MainPage} />
            <Route path="/cart" exact component={CartList} />
            <Route path="/categories" exact component={CategoryList} />
            <Route path="/categories/:id" exact component={DishesList} />
            <Route path="/orders" exact component={MyOrdersList} />
            <Route path="/search" exact component={FindDishesList} />

          </Switch>
          <SFooter/>
        </BrowserRouter>
      </LoginWrapper>
    </div>
  );
}

export default App;
