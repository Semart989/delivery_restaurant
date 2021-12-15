import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { categoriesReducer } from './categoriesReducer';
import { dishesReducer } from './dishesReducer';
import { myOrdersReducer } from './myOrdersReducer';
import { allDishesReducer } from './allDishesReducer';
// import { searchReducer } from './searchReducer'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  dishes: dishesReducer,
  myOrders: myOrdersReducer,
  allDishes: allDishesReducer,
  // mySearch: searchReducer,
});

export default rootReducer;
