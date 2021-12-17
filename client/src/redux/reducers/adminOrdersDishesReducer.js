import adminOrderAT from '../actionTypes/adminOrderAT';

const initialState = {
  dishes: [],
  error: null,
};

let arr = [];


export const adminOrdersDishesReducer = ( state = initialState, action) => {
  switch (action.type) {

    case adminOrderAT.DELETE_DISH:
      arr = [...state.dishes];
      

      arr.filter((order) => order.id !== action.payload.orderId)

      // console.log(action.payload.orderId);

      return { ...state, dishes: arr};
    default:
      return state;
  }
}
