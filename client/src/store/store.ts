import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import { bookReducer } from "./book.slice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      return getDefaultMiddleware().concat(logger);
    } else {
      return getDefaultMiddleware();
    }
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
