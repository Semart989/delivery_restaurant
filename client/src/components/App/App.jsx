import './App.css';
import MainPage from '../MainPage/MainPage'
import CartList from '../CartList/CartList'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/cart" exact>
          <CartList />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
