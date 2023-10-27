import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { list } from "../services/products";

const initialState = {
  products: [],
  total: 0,
  currentPage: 1,
  limit: 10,
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", 
async()=>{
    const resp = await list()
    return resp.data;
}
);

const productSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.loading= false;
        state.products= action.payload
    }).addCase(fetchProducts.pending,(state)=>{
        state.loading= true;
    }).addCase(fetchProducts.rejected,(state, action)=>{
        state.loading= false;
        state.error= action.error.message;
    })
  },
});
export const {setCurrentPage,setLimit} = productSlice.actions;
export const productReducer = productSlice.reducer
