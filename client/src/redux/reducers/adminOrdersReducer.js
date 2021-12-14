import adminOrderAT from '../actionTypes/adminOrderAT';

const initialState = {
  orders: [],
  error: null,
};

export const adminOrdersReducer = ( state = initialState, action) => {

  switch (action.type) {

    case adminOrderAT.GET_ORDERS:
      return { ...state, orders: [...action.payload] };
    
    case adminOrderAT.INIT_ERROR_ORDER:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
