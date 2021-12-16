import adminOrderAT from '../actionTypes/adminOrderAT';

const initialState = {
  orders: [],
  error: null,
};

let arr = [];
let obj = {};
let index = -1;

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

    case adminOrderAT.CHANGE_ORDER:
      
      return state;
    
    case adminOrderAT.INIT_ERROR_ORDER:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
