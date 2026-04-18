import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// тип данных формы
export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  zip: string;
}

interface OrdersState {
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  loading: false,
  error: null,
};

// 🔥 создание заказа
export const createOrder = createAsyncThunk<
  any,
  OrderFormData,
  { state: RootState }
>("orders/createOrder", async (formData, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const cartItems = state.cart.items;

    if (cartItems.length === 0) {
      throw new Error("Корзина пустая");
    }

    // 1. создаём заказ
    const orderRes = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        store_id: 1,
        user_email: formData.email,
        status: "new",

        customer_name: formData.name,
        phone: formData.phone,
        city: formData.city,
        address: formData.address,
        zip: formData.zip,
      }),
    });

    if (!orderRes.ok) {
      throw new Error("Ошибка создания заказа");
    }

    const order = await orderRes.json();

    // 2. товары заказа
    await Promise.all(
      cartItems.map((item) =>
        fetch("http://localhost:3000/order_items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({
            order_id: order.id,
            product_id: String(item.product.id),
            store_id: item.product.store_id,
            quantity: item.quantity,
            price: item.product.price,
            }),
        })
      )
    );

    return order;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ordersSlice.reducer;