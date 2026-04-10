import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../../types";

interface ProductsState {
    items: Product[];
    loading: boolean;
}

const initialState: ProductsState = {
    items: [],
    loading: false,
};

//Загрузка товаров
export const fetchProducts = createAsyncThunk<Product[]>("products/fetchProducts", async() => {
    const response = await fetch("http://localhost:3000/products?store_id=1");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return (await response.json()) as Product[];
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        });
    },
});

export default productsSlice.reducer;