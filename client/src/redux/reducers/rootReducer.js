import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { categoriesReducer } from './categoriesReducer';
import { dishesReducer } from './dishesReducer';

import { adminOrdersReducer } from './adminOrdersReducer';
import { myOrdersReducer } from './myOrdersReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  adminOrders: adminOrdersReducer,
  categories: categoriesReducer,
  dishes: dishesReducer,
  myOrders: myOrdersReducer,
});

export default rootReducer;
