
// import ViewContainer from '../ViewContainer/ViewContainer';


import { Provider, useSelector } from 'react-redux';
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
import RoomSetter from '../RoomSetter/RoomSetter';
import { CookiesProvider } from "react-cookie";
import LoginPage from '../LoginPage/LoginPage';
import StaffLoginPage from '../StaffLoginPage/StaffLoginPage';
import Logout from '../Logout/Logout';
import FindDishesList from '../FindDishesList/FindDishesList';

function App() {

  // вытягиваем массив товаров из корзины клиента
  const cart = useSelector((state) => state.cart.cart)
  const store = useSelector(store => store);

  // при изменении состояния корзины 
  // дублируем массив товаров в LocalStorage c key = 'user_cart'
  useEffect(
    () => {
      localStorage.setItem('user_cart', JSON.stringify(cart));
    }, [cart]
  );

  return (
    <div className="App">
        <CookiesProvider>
          <BrowserRouter>
            <LoginWrapper>
              <ResponsiveAppBar />
              <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/cart" exact component={CartList} />
                <Route path="/room/:roomid" exact component={RoomSetter} />
                <Route path="/categories" exact component={CategoryList} />
                <Route path="/categories/:id" exact component={DishesList} />
                <Route path="/orders" exact component={MyOrdersList} />
                <Route path="/search" exact component={FindDishesList} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/staff" exact component={StaffLoginPage} />
              </Switch>
            </LoginWrapper>
          </BrowserRouter>
        </CookiesProvider>
    </div>
  );
}

export default App;
