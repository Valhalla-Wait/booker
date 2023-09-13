import { bookApi } from "@/entities/Book/api/bookApi";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bookApi.middleware)
  });
  
  export type RootStateType = ReturnType<typeof rootReducer>;
  export type AppDispatch = typeof appStore.dispatch;