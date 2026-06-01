
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    Additem: (state, action) => {
        const itemIndex = state.findIndex(item => item.id === action.payload.id);
        if (itemIndex !== -1) {
            state[itemIndex].quantity += 1;
        } else {
            state.push({ ...action.payload, quantity: 1 });
        }
    },
    RemoveItem: (state, action) => {
        const itemIndex = state.findIndex(item => item.id === action.payload);
        if (itemIndex !== -1) {
            state.splice(itemIndex, 1);
        }
    }
  } 
}); 

export const {Additem,RemoveItem} = cartSlice.actions;
export default cartSlice.reducer;