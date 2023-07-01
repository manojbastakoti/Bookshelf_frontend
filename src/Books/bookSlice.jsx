import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { bookService } from "./bookService";

export const getAllBooks = createAsyncThunk("book/get", async (thunkAPI) => {
  try {
    return await bookService.getBooks();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const bookState ={
    book:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}

export const bookSlice = createSlice({
  name: "book",
  initialState: bookState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.pending,(state)=>{
        state.isLoading=true;
    }).addCase(getAllBooks.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.book= action.payload;
    }).addCase(getAllBooks.rejected,(state,action)=>{
        state.isError=true;
        state.isLoading=false;
        state.isSuccess=false;
        state.message= action.error;
    })
  },
});

export default bookSlice.reducer;
