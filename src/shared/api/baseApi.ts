import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Tags } from "./tags"

export const baseApi = createApi({
    reducerPath: 'selectBook',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_ENDPOINT }),
    tagTypes: [Tags.BOOK],
    endpoints: () => ({})
})