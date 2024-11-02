import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Components/Veg";
import NonVeg from "./Components/NonVeg";

const productsSlice = createSlice({
    name:'products',
    initialState:{
        Veg:[
            {name:'Tomato',price:20.25},
            {name:'Potato',price:45.30}
        ],
        NonVeg:[
            {name:'Chicken',price:300.00},
            {name:'Fish',price:405.24}
        ]
    },
    reducers:{}
});

const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.name === action.payload.name);

            if(existingItem){
                existingItem.quantity +=1;
            } else {
                state.push({ ...action.payload, quantity:1});
            }
        },
        incrementQuantity:(state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item){
                item.quantity +=1;
            }
        },
        decrementQuantity:(state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item && item.quantity>1){
                item.quantity -=1;
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clearCart: (state) => {
            return [];
        },
    },
});

const store = configureStore({
    reducer:{products:productsSlice.reducer,
        cart: cartSlice.reducer,
    }
})
export default store;
export const {addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart} = cartSlice.actions;