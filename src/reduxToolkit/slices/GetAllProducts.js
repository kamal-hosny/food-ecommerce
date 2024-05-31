import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import { axiosConfig } from "../../axios/axiosConfig";

const initialState = {
    productData: [],
    allCategories: [],
    productDetails: {},
    filterCategoryItems: [],
    isLoading: false,
    errors: null,
};

const getAllProducts = createAsyncThunk("get-all-products",async () => {
    try {
        const {data} = await axiosConfig({
            url: `products?populate=*`
        })
        return data
    } catch (error) {
        return error
    }
});
const getProductDetails = createAsyncThunk("get-product-details",async (slug) => {
    try {
        const {data} = await axiosConfig({
            url: `products/${slug}?populate=*`
        })
        return data
    } catch (error) {
        return error
    }
});
const getAllCategories = createAsyncThunk("get-all-Categories",async () => {
    try {
        const {data} = await axiosConfig({
            url: `categories?populate=*`
        })
        return data
    } catch (error) {
        return error
    }
});
const fillterCategories = createAsyncThunk("fillter-Categories",async (title) => {
    try {
        const {data} = await axiosConfig({
            url: `categories?filters[title]=${title}&populate[products][populate][0]=image`
        })
        return data
    } catch (error) {
        return error
    }
});

const getAllProductSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state, action) => {
            state.isLoading = true
        })
            .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productData = action.payload
        })
            .addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload
        })
            .addCase(getProductDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.productDetails = action.payload
        })
            .addCase(getAllCategories.fulfilled, (state, action) => {
            state.allCategories = action.payload
        })
            .addCase(fillterCategories.fulfilled, (state, action) => {
            state.filterCategoryItems = action.payload
        })
    }
})
const getAllProductsReducer = getAllProductSlice.reducer;

export { getAllProducts, getAllProductsReducer, getProductDetails, getAllCategories, fillterCategories }