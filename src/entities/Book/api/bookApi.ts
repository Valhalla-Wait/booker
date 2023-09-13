import { baseApi } from "@/shared/api/baseApi"
import {BookType } from "../model/types"
import { BookResponseType } from "./types"

export const bookApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getBookById: builder.query<BookType, string>({
            query: (id) => ({
                url: `/${id}`, params: {
                    key: import.meta.env.VITE_API_KEY
                },
            }),
            transformResponse: ({id, volumeInfo}: BookResponseType) => ({
                id,
                ...volumeInfo
            })       
        })
    })
})


export const { usePrefetch, useGetBookByIdQuery } = bookApi