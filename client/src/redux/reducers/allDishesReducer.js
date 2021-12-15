import allDishesAT from "../actionTypes/allDishesAT";

const initialState = {
  allDishes: [],
  mySearch: [],
  error: null,
}

export const allDishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case allDishesAT.GET_ALL_DISHES:
      return { ...state, allDishes: action.payload };

    case allDishesAT.INIT_SEARCH:
      // console.log(state.allDishes.dishes)
      const copyAllDishes = [...state.allDishes.dishes].filter((dish) => { 
        return dish.name.toLowerCase().includes(action.payload.toLowerCase())})
        // console.log(copyAllDishes)
      return { ...state, mySearch: copyAllDishes };

    case allDishesAT.ERROR_ALL_DISHES:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

