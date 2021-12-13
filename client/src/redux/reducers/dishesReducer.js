import dishesAT from "../actionTypes/dishesAT";

const initialState = {
  dishes: [],
  categoryID: 0,
  error: null,
};

export const dishesReducer = ( state = initialState, action) => {
  switch (action.type) {

    case dishesAT.INIT_DISHES:
      return { ...state, dishes:action.payload.data, categoryID:action.payload.categoryID };

    
    // case ordersAT.INIT_ERROR_ORDER:
    //   return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
