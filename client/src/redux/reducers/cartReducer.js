import cartAT from '../actionTypes/cartAT';

const initialState = {
  // получаем данные из LocalStorage по ключу user_cart, иначе initialState = []
  cart: JSON.parse(localStorage.getItem('user_cart') || '[]'),
  error: null,
};

export const cartReducer = ( state = initialState, action) => {

  switch (action.type) {

    case cartAT.SEND_CART:
      return { ...state, cart: [] };
    
    case cartAT.INCREMENT_CART:
      const copyCart = [...state.cart];
      
      let status = false;
      copyCart.map((cart) => {
        if(cart.id === action.payload.id) {
          cart.quantity += 1;
          cart.price += cart.initialPrice;
          status = true;
          return cart;
        } else return cart;
      })
      if(status === false) {
        action.payload.quantity = 1;
        // добавляем поле initialPrice в объект с блюдом, для работы с общей ценой
        action.payload.initialPrice = action.payload.price;
        copyCart.push(action.payload);
      }

      return { ...state, cart: copyCart };

    case cartAT.DECREMENT_CART:
      const copyCartDecrement = [...state.cart];
      copyCartDecrement.map((cart) => {
        if(cart.id === action.payload.id) {
          if(cart.quantity > 1) {
            cart.price -= cart.initialPrice;
            cart.quantity -= 1;
          }
          return cart;
        } else return cart;
      });

      return { ...state, cart: copyCartDecrement };

    case cartAT.DELETE_ONE_POSITION:
      return { ...state, cart: [...state.cart].filter((product) => product.id !== action.payload) };

    




    
    
    case cartAT.INIT_ERROR:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}

