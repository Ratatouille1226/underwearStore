import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './features/products/productsSlice';
import filtersReducer from './features/filters/filtersSlice';
import cartReducer from './features/cart/cartSlice';
import ordersReducer from './features/orders/ordersSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        filters: filtersReducer,
        cart: cartReducer,
        orders: ordersReducer
    },
});
// типы
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;