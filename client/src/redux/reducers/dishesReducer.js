import dishesAT from "../actionTypes/dishesAT";

const initialState = {
  dishes: [],
  error: null,
};

export const dishesReducer = (state = initialState, action) => {
  switch (action.type) {

    case dishesAT.INIT_DISHES:
      return { ...state, dishes: action.payload };

    
    case dishesAT.INIT_ERROR_DISHES:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
