import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
    category: string;
    color: string;
    size: string;
}

const initialState: FiltersState = {
    category: "all",
    color: "all",
    size: "all",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
        setSize: (state, action: PayloadAction<string>) => {
            state.size = action.payload;
        },
        resetFilters: (state) => {
            state.category = "all";
            state.color = "all";
            state.size = "all";
        },
    }
});

export const { setCategory, setColor, setSize, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;