import { createSelector } from "@reduxjs/toolkit";
import { RootStateType } from "../rootReducer";

const booksSelect = (state: RootStateType) => state.books;

export const booksDataSelector = createSelector(booksSelect, (booksState) => booksState.books);

export const booksTotalCountSelector = createSelector(booksSelect, (booksState) => booksState.totalItems);

export const booksErrSelector = createSelector(booksSelect, (booksState) => booksState.error);

export const booksIsFetchingSelector = createSelector(booksSelect, (booksState) => booksState.isFetching);

export const moreBooksIsFetchingSelector = createSelector(booksSelect, (booksState) => booksState.isFetchingMoreBooks);