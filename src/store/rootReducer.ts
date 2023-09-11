import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { booksApi, booksSlice } from './slice/booksSlice';
import { searchSlice } from './slice/search/searchSlice';
// import { userApi } from './slice/Auth/queries';

const rootReducer = combineReducers({
  // [signInSlice.name]: signInSlice.reducer,
  // [usersSlice.name]: usersSlice.reducer,
  [booksApi.reducerPath]: booksApi.reducer,
  [booksSlice.name]: booksSlice.reducer,
  [searchSlice.name]: searchSlice.reducer
});

// create a makeStore function
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(booksApi.middleware)
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();