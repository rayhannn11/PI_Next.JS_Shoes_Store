import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    // Add Cart
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;

      // state.total += action.payload.price * action.payload.quantityItem;
    },
    updateCartQty: (state, action) => {
      const itemIndex = state.products.find(
        (item) => item.idProduct === action.payload.idProduct
      );

      if (itemIndex) {
        return {
          ...state,
          products: state.products.map((x) =>
            x.idProduct === itemIndex.idProduct ? action.payload : x
          ),
        };
      }
    },
    getTotals(state, action) {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, quantityItem } = cartItem;
          const itemTotal = price * quantityItem;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantityItem;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      // var nf = new Intl.NumberFormat();
      // let convert = nf.format(total);
      total = parseInt(total);
      state.total = total;
    },
    // Remove Item ID
    removeFromCart(state, action) {
      state.products.map((cartItem) => {
        if (cartItem.idProduct === action.payload.idProduct) {
          const nextCartItems = state.products.filter(
            (item) => item.idProduct !== cartItem.idProduct
          );

          state.products = nextCartItems;
        }
        return state;
      });
      state.quantity -= 1;
    },
    // Clear All Items Cart
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  updateCartQty,
  clearCart,
  getTotals,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
