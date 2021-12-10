import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import store from '../../redux/store';

import LoginWrapper from '../LoginWrapper/LoginWrapper';
import MainPage from '../MainPage/MainPage'
import CartList from '../CartList/CartList'
import ResponsiveAppBar from '../Nav/Nav'
import SFooter from '../SFooter/SFooter'


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
            </Switch>

            <SFooter />

          </BrowserRouter>
        </LoginWrapper>
      </Provider>

    </div>
  );
}

export default App;
