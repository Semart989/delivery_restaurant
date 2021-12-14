import categoriesAT from "../actionTypes/categoriesAT";

const initialState = {
  categories: [],
  error: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {

    case categoriesAT.INIT_CATEGORIES:
      return { ...state, categories: action.payload };

    
    case categoriesAT.INIT_ERROR_CATEGORIES:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
