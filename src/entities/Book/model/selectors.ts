import { RootStateType } from "@/app/appStore";
import { createSelector } from "@reduxjs/toolkit";

const booksSelect = (state: RootStateType) => state.books;

export const booksDataSelector = createSelector(booksSelect, (booksState) => booksState.books);

export const booksTotalCountSelector = createSelector(booksSelect, (booksState) => booksState.totalItems);

export const booksErrSelector = createSelector(booksSelect, (booksState) => booksState.error);

export const booksIsFetchingSelector = createSelector(booksSelect, (booksState) => booksState.isFetching);

export const moreBooksIsFetchingSelector = createSelector(booksSelect, (booksState) => booksState.isFetchingMoreBooks);