import { bookApi, booksSlice } from '@/entities/Book';
import { searchSlice } from '@/entities/Search/model/searchSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [bookApi.reducerPath]: bookApi.reducer,
  [booksSlice.name]: booksSlice.reducer,
  [searchSlice.name]: searchSlice.reducer
});