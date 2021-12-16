import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { categoriesReducer } from './categoriesReducer';
import { dishesReducer } from './dishesReducer';

import { adminOrdersReducer } from './adminOrdersReducer';
import { myOrdersReducer } from './myOrdersReducer';
import { allDishesReducer } from './allDishesReducer';
// import { searchReducer } from './searchReducer'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  adminOrders: adminOrdersReducer,
  categories: categoriesReducer,
  dishes: dishesReducer,
  myOrders: myOrdersReducer,
  allDishes: allDishesReducer,
  // mySearch: searchReducer,
});

export default rootReducer;
