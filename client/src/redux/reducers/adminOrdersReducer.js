import adminOrderAT from '../actionTypes/adminOrderAT';

const initialState = {
  orders: [],
  error: null,
};

let arr = [];

export const adminOrdersReducer = ( state = initialState, action) => {

  switch (action.type) {

    case adminOrderAT.GET_ORDERS:
      return { ...state, orders: [...action.payload] };

    case adminOrderAT.CHANGE_STATUS_ORDER:
      arr = [...state.orders];

      arr.forEach((order) => { 
        if (order.id === action.payload.id) {
          order = {...order, currentStatus: action.payload.currentStatus};
        }
      });

      return { ...state, orders: [...arr] };
    
    case adminOrderAT.DELETE_DISH:
      const arr2 = [...state.orders];
      // console.log(action.payload.dishId, 'action.payload');
      arr2.forEach((order) => {
        // console.log(order.id, 'order.id');
        if (order.id === action.payload.orderId) {
          // console.log(order, 'AAAAAAAAAAAAA');
          // order.dishes.findIndex() 
          
          order.dishes.filter((dish) => {
            // console.log(dish.id !== action.payload.dishId)
            return dish.id !== action.payload.dishId});
          }
          console.log(order.dishes); 
      });
      // arr.filter((order) => {order.id !== action.payload.orderId})

      // console.log(action.payload.orderId);
      // console.log(arr2);
      return { ...state, orders: arr2};

    case adminOrderAT.CHANGE_ORDER:
      
      return state;
    
    case adminOrderAT.INIT_ERROR_ORDER:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
