import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk('getBooks', async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=''&key=AIzaSyCKV0gGU9SOov5Pxa7d1fh7ybA0KAtebr4`);
    return response.json()
})


const booksSlice = createSlice({
    name: 'books',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.items;
        })
        builder.addCase(getBooks.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getBooks.rejected, (state, action) => {
            console.log('error', action.payload);
            state.isError = true
        }) 
    }
});

export default booksSlice.reducer