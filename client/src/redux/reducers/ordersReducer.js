import ordersAT from '../actionTypes/ordersAT';

const initialState = {
  orders: [],
  error: null,
};

export const ordersReducer = ( state = initialState, action) => {

  switch (action.type) {

    case ordersAT.INIT_ORDER:
      return { ...state, orders: action.payload };

    
    case ordersAT.INIT_ERROR_ORDER:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}

