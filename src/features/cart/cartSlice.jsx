import { createSlice } from "@reduxjs/toolkit";

const initialState={
  cart:[],
  // cart:[
  //   {

  //       pizzaId:12,
  //       name:"margreata",
  //       quantity:3,
  //       unitPrice:16,
  //       totalPrice:48,
  //   }

//   ],
 };
const cartSlice=createSlice({
 name:"cart",
    initialState,
  reducers:{
    addToCart(state,action){
      state.cart.push(action.payload)
    },
  
    deleteCart(state,action){
      state.cart=state.cart.filter(item=>
        item.pizzaId!==action.payload
      )
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteCart(state, action);

    },
    
  
    clearCart(state){
      state.cart=[]
    },
  }
});

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export const{addToCart,deleteCart,increaseItemQuantity,decreaseItemQuantity,clearCart}=cartSlice.actions;


export default  cartSlice.reducer