import './App.css';

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
              <Route path="/" exact>
                <MainPage />
              </Route>
            </Switch>
            <Switch>
              <Route path="/cart" exact>
                <CartList />
              </Route>
            </Switch>
          </BrowserRouter>
        </LoginWrapper>
      </Provider>



    </div>
  );
}

export default App;
