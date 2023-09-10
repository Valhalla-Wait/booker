import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

type QueryParamsType = {
    title?: string,
    orderBy?: string,
    category?: string
}

export const booksSlice = createApi({
    reducerPath: 'books',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/v1'}),
    endpoints: builder => ({
        getBooks: builder.query({
            query: ({title, orderBy, category}:QueryParamsType) => ({url: '/volumes', params: {
                q: `${title}${category !== 'all' ? `+subject:${category}` : ''}`,
                orderBy: `${orderBy ? orderBy : 'relevance'}`,
                key: 'AIzaSyBcesEpZzivaw7SJ-qEjqVR85bfv0K_jhI'
            }}),
        })
    })
})

export const {useGetBooksQuery, useLazyGetBooksQuery} = booksSlice