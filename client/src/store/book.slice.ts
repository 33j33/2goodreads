import {
  AnyAction,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createRating, fetchBooks } from "../api/books";
import { RootState } from "./store";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    list: [] as Book[],
  },
  reducers: {
    addBooks: (state, action: PayloadAction<Book | Book[]>) => {
      const data = action.payload;
      if (Array.isArray(data)) {
        state.list = data;
      } else {
        state.list.push(data);
      }
    },
    updateRating: (state, action: PayloadAction<Rating>) => {
      const rating = action.payload;
      const bookIdx = state.list.findIndex((b) => b.id === rating.bookId);
      if (bookIdx !== -1) {
        state.list[bookIdx].avgRating =
          (state.list[bookIdx].avgRating * state.list[bookIdx].ratings.length +
            rating.rating) /
          (state.list[bookIdx].ratings.length + 1);
        state.list[bookIdx].ratings.unshift(rating);
      }
    },
  },
});

export const getBooks =
  (page: number): ThunkAction<Promise<Book[]>, RootState, unknown, AnyAction> =>
  async (dispatch): Promise<Book[]> => {
    try {
      const books = await fetchBooks(page);
      dispatch(addBooks(books));
      return books;
    } catch (err: any) {
      throw new Error(err?.message);
    }
  };

export const addRating =
  (
    rating: number,
    review: string,
    bookId: string
  ): ThunkAction<Promise<Rating>, RootState, unknown, AnyAction> =>
  async (dispatch): Promise<Rating> => {
    try {
      const res = await createRating({ rating, review, bookId });
      dispatch(updateRating(res));
      return res;
    } catch (err: any) {
      throw new Error(err?.message);
    }
  };
export const { addBooks, updateRating } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
