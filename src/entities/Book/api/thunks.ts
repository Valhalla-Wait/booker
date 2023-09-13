import { QueryParamsType, searchSlice } from "@/entities/Search"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type {BooksResponseType} from "@/entities/Book"
import { makeRequest } from "@/shared/api/makeRequest"
import { getErrorMessage } from "@/shared/api/getErrorMessage"
import { RootStateType } from "@/app/appStore"

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
                    key: import.meta.env.VITE_API_KEY
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
                    key:import.meta.env.VITE_API_KEY
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