import categoriesAT from "../actionTypes/categoriesAT";

const initialState = {
  categories: [],
  error: null,
};

export const categoriesReducer = ( state = initialState, action) => {
  switch (action.type) {

    case categoriesAT.INIT_CATEGORIES:
      // ('CATEGORIES');
      return { ...state, categories:action.payload };

    
    // case ordersAT.INIT_ERROR_ORDER:
    //   return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
