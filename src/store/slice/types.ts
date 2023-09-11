export interface BookI {
    id: string
    title: string,
    subtitle: string,
    authors: string[],
    description: string,
    categories: string[],
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    }
}

export interface RequestBookItemI {
    title: string,
    subtitle: string,
    authors: string[],
    description: string,
    categories: string[],
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    }
}


export type BooksResponseType = {
    items: BookItemType[]
    totalItems: number
}

export type BooksConvertReponseType = {
    items: BookI[]
    totalItems: number
}

export type BookItemType = {
    id: string
    volumeInfo: RequestBookItemI
}

export type ReducerType = {
    books: BookI[],
    totalItems: number | null
    isFetching: boolean,
    isFetchingMoreBooks: boolean,
    error: string
}