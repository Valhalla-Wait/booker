import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { booksSlice } from './slice/booksSlice';
// import { userApi } from './slice/Auth/queries';

const rootReducer = combineReducers({
  // [signInSlice.name]: signInSlice.reducer,
  // [usersSlice.name]: usersSlice.reducer,
  [booksSlice.reducerPath]: booksSlice.reducer,
});

// create a makeStore function
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(booksSlice.middleware)
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();