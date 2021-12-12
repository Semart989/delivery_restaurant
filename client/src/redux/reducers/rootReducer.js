import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { ordersReducer } from './ordersReducer';
import { categoriesReducer } from './categoriesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  orders: ordersReducer,
  categories: categoriesReducer,
});

export default rootReducer;
