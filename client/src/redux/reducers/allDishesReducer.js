import allDishesAT from "../actionTypes/allDishesAT";

const initialState = {
  allDishes: [],
  // searched: 
  error: null,
}

export const allDishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case allDishesAT.GET_ALL_DISHES:
      return { ...state, allDishes: action.payload };
    case allDishesAT.ERROR_ALL_DISHES:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
