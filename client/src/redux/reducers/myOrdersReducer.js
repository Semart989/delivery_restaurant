import myOrdersAT from "../actionTypes/myOrders";


const initialState = {
  myOrders: [],
  error: null,
};

export const myOrdersReducer = ( state = initialState, action) => {
  switch (action.type) {

    case myOrdersAT.INIT_MY_ORDERS:
      return { ...state, myOrders: action.payload };

    
    // case ordersAT.INIT_ERROR_MY_ORDERS:
    //   return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
