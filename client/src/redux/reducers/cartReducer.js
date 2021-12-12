import cartAT from '../actionTypes/cartAT';

const initialState = {
  cart: [
    { id: 1, 
      name: 'Борщ', 
      picture: 'https://recepty.24tv.ua/resources/photos/recipe/1200x675_DIR/201912/86d3f0ec08-b061-4a2d-afa7-f053527f4f06.jpg?1582905806000', 
      price: 350, 
      initialPrice: 350,
      time: 20, 
      quantity: 1,
    },
    { id: 2, 
      name: 'Плов', 
      picture: 'https://img.delo-vcusa.ru/2019/05/Plov-s-midiyami-1.jpg', 
      price: 450, 
      initialPrice: 450,
      time: 30, 
      quantity: 1,
    },
    { id: 3, 
      name: 'Щи', 
      picture: 'https://lifehacker.ru/wp-content/uploads/2015/10/Depositphotos_44100665_l-2015_1444918558-e1522781212599.jpg', 
      price: 250, 
      initialPrice: 250,
      time: 20, 
      quantity: 1,
    },
    { id: 4, 
      name: 'Шашлык', 
      picture: 'https://e2.edimdoma.ru/data/recipes/0005/3079/53079-ed4_wide.jpg?1468460964', 
      price: 350, 
      initialPrice: 350,
      time: 30, 
      quantity: 1,
    },
    { id: 5, 
      name: 'Чай', 
      picture: 'data:image/jpeg;base64,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', 
      price: 50, 
      initialPrice: 50,
      time: 5, 
      quantity: 1,
    },
  ],
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
        if(cart.id === action.payload) {
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
        if(cart.id === action.payload) {
          if(cart.quantity > 1) {
            cart.price -= cart.initialPrice;
            cart.quantity -= 1;
          }
          return cart;
        } else return cart;
      });

      return { ...state, cart: copyCartDecrement };
    




    
    
    case cartAT.INIT_ERROR:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}

