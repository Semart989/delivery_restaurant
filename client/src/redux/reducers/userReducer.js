import { userAT }  from '../actionTypes/userAT'

const initialState = {
  // error: null
};

export const userReducer = ( state = initialState, action) => {
  //console.log(action.payload);
  switch (action.type) {
    case userAT.INIT_USER:
      return {
        ...state, ...action.payload
      }
    default:
      return state;
  }
}

