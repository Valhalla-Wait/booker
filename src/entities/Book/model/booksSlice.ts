import { createSlice } from '@reduxjs/toolkit'
import { getErrorMessage } from '@/shared/api/getErrorMessage'
import { BooksThunks } from '..'
import { ReducerType } from './types'


const initialState: ReducerType = {
    books: [],
    totalItems: null,
    isFetching: false,
    isFetchingMoreBooks: false,
    error: ''
}


export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(BooksThunks.fetchBooks.fulfilled, (state, action) => ({
            ...state,
            books: action.payload.items,
            totalItems: action.payload.totalItems,
            isFetching: false,
            error: '',
        })),
            builder.addCase(BooksThunks.fetchBooks.pending, (state) => ({
                ...state,
                isFetching: true,
            })),
            builder.addCase(BooksThunks.fetchBooks.rejected, (state, action) => ({
                ...state,
                isFetching: false,
                error: getErrorMessage(action.payload),
            }))
        builder.addCase(BooksThunks.fetchMoreBooks.fulfilled, (state, action) => ({
            ...state,
            books: [...state.books, ...action.payload.items],
            isFetchingMoreBooks: false,
            error: '',
        })),
            builder.addCase(BooksThunks.fetchMoreBooks.pending, (state) => ({
                ...state,
                isFetchingMoreBooks: true,
            })),
            builder.addCase(BooksThunks.fetchMoreBooks.rejected, (state, action) => ({
                ...state,
                isFetchingMoreBooks: false,
                error: getErrorMessage(action.payload),
            }))
    }

})
