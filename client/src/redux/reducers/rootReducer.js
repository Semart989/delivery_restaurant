import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { ordersReducer } from './ordersReducer';
import { categoriesReducer } from './categoriesReducer';
import { dishesReducer } from './dishesReducer';
import { adminOrdersReducer } from './adminOrdersReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  orders: ordersReducer,
  adminOrders: adminOrdersReducer,
  categories: categoriesReducer,
  dishes: dishesReducer,
});

export default rootReducer;
