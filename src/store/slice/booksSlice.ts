import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const booksSlice = createApi({
    reducerPath: 'books',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/v1'}),
    endpoints: builder => ({
        getPosts: builder.query({
            query: ({title, author}:{title?: string, author?: string}) => ({url: '/volumes', params: {
                q: {
                    intitle: title,
                },
                key: 'AIzaSyBcesEpZzivaw7SJ-qEjqVR85bfv0K_jhI'
            }}),
        })
    })
})

export const {useGetPostsQuery, useLazyGetPostsQuery} = booksSlice