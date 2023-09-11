import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { makeRequest } from '../../shared/api/makeRequest'
import { getErrorMessage } from '../../utils/getErrorMessage'
import { BooksResponseType, ReducerType } from './types'
import { searchSlice } from './search/searchSlice'
import { QueryParamsType } from './search/types'
import { RootStateType } from '../rootReducer'

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async ({ title, orderBy, category, page = 0 }: QueryParamsType, { rejectWithValue, dispatch }) => {
        try {

            const response = await makeRequest<BooksResponseType>({
                method: 'GET',
                params: {
                    q: `${title}${category !== 'all' ? `+subject:${category}` : ''}`,
                    maxResults: 30,
                    startIndex: page,
                    orderBy: `${orderBy ? orderBy : 'relevance'}`,
                    key: 'AIzaSyBcesEpZzivaw7SJ-qEjqVR85bfv0K_jhI'
                }
            })
            dispatch(searchSlice.actions.setSearchParams(
                { title, orderBy, category, page }
            ))

            return ({
                ...response.data,
                items: response.data.items.map(({ id, volumeInfo }) => ({
                    id,
                    ...volumeInfo
                }))
            })
        } catch (e) {
            return rejectWithValue(getErrorMessage(e))
        }
    }
)

export const fetchMoreBooks = createAsyncThunk(
    'books/fetchMoreBooks',
    async (_, { rejectWithValue, dispatch, getState }) => {
        try {
            const { title, category, orderBy, page } = (getState() as RootStateType).searchParams.data

            const nextPage = (page as number) + 1

            const response = await makeRequest<BooksResponseType>({
                method: 'GET',
                params: {
                    q: `${title}${category !== 'all' ? `+subject:${category}` : ''}`,
                    maxResults: 30,
                    startIndex: nextPage,
                    orderBy: `${orderBy ? orderBy : 'relevance'}`,
                    key: 'AIzaSyBcesEpZzivaw7SJ-qEjqVR85bfv0K_jhI'
                }
            })
            dispatch(searchSlice.actions.setSearchParams(
                { title, orderBy, category, page: nextPage }
            ))

            return ({
                ...response.data,
                items: response.data.items.map(({ id, volumeInfo }) => ({
                    id,
                    ...volumeInfo
                }))
            })
        } catch (e) {
            return rejectWithValue(getErrorMessage(e))
        }
    }
)

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
        builder.addCase(fetchBooks.fulfilled, (state, action) => ({
            ...state,
            books: action.payload.items,
            totalItems: action.payload.totalItems,
            isFetching: false,
            error: '',
        })),
            builder.addCase(fetchBooks.pending, (state) => ({
                ...state,
                isFetching: true,
            })),
            builder.addCase(fetchBooks.rejected, (state, action) => ({
                ...state,
                isFetching: false,
                error: getErrorMessage(action.payload),
            }))
        builder.addCase(fetchMoreBooks.fulfilled, (state, action) => ({
            ...state,
            books: [...state.books, ...action.payload.items],
            isFetchingMoreBooks: false,
            error: '',
        })),
            builder.addCase(fetchMoreBooks.pending, (state) => ({
                ...state,
                isFetchingMoreBooks: true,
            })),
            builder.addCase(fetchMoreBooks.rejected, (state, action) => ({
                ...state,
                isFetchingMoreBooks: false,
                error: getErrorMessage(action.payload),
            }))
    }

})

export const booksApi = createApi({
    reducerPath: 'currentBookInfo',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1' }),
    tagTypes: ['Book'],
    endpoints: builder => ({
        getBookById: builder.query({
            query: (id: string) => ({
                url: `/volumes/${id}`, params: {
                    key: 'AIzaSyBcesEpZzivaw7SJ-qEjqVR85bfv0K_jhI'
                }
            }),
            providesTags: ['Book']
        })
    })
})


export const { usePrefetch, useLazyGetBookByIdQuery, useGetBookByIdQuery } = booksApi