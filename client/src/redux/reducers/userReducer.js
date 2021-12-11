import userAT from '../actionTypes/userAT';

const initialState = {
  user: {
    id: 3,
    name: 'Oleg',
    phone: '89112223344',
    room: '123',
  },
  error: null,
};

export const userReducer = ( state = initialState, action) => {

  switch (action.type) {

    case userAT.INIT_USER:
      return { ...state, user: action.payload };
    
    case userAT.INIT_ERROR_USER:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}
