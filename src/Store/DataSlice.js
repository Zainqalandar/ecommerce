import { createSlice } from "@reduxjs/toolkit";
import Alldata from "./Alldata";

const DataSlice = createSlice({
    name: 'Ecommerce',
    initialState: {
        Items: [],
        Storecards: Alldata,
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            const index = state.Items.findIndex((cart) => cart.id == action.payload.id)
            if (index >= 0) state.Items[index].quantity += 1
            else state.Items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.Items = state.Items.filter(cart => cart.id !== action.payload)
        },
        getCartTotle: (state) => {
            const { totalPrice, totalQuantity } = state.Items.reduce(
                (ItemTotle, element) => {
                    const { price, quantity} = element
                    const pricefull = quantity * price
                    ItemTotle.totalPrice += pricefull
                    ItemTotle.totalQuantity += quantity
                    return ItemTotle
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            )

            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity

        },
        Increase: (state, action) => {
            state.Items = state.Items.map(cart => {
                if (cart.id == action.payload) {
                    return { ...cart, quantity: cart.quantity + 1 }
                }
                return cart
            })
        },
        Decrease: (state, action) => {
            state.Items = state.Items.map(cart => {
                if (cart.id == action.payload.id && action.payload.quantity >= 2) {
                    return { ...cart, quantity: cart.quantity - 1 }
                }
                return cart
            })
        },

    }

})

export const { addToCart, removeItem, Increase, Decrease, getCartTotle } = DataSlice.actions

export default DataSlice.reducer