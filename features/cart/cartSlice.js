import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      user: 'userLogged',
      updatedAt: Date.now().toLocaleString(),
      total: 0,
      items: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const itemInCart = state.value.items.find(
        itemInCart => itemInCart.id === item.id
      );
      if (itemInCart) {
        itemInCart.quantity += item.quantity; // Sumar la cantidad seleccionada
      } else {
        state.value.items.push({ ...item });
      }
      state.value.total = state.value.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.value.items = state.value.items.filter(
        itemInCart => itemInCart.id !== item.id
      );
      state.value.total = state.value.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
