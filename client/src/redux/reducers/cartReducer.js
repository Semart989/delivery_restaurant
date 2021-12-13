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
      picture: "https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/20161220-v-trete-voskresene-dekabrya-otmechaetsya-mezhdunarodnyy-den-chaya/tea-cup-lemon-mint-zpy.jpg",
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

