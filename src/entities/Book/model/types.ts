import { BookVolumeType } from "../api/types"

export type BookType = BookVolumeType & {
    id: string
}

export type ReducerType = {
    books: BookType[],
    totalItems: number | null
    isFetching: boolean,
    isFetchingMoreBooks: boolean,
    error: string
}