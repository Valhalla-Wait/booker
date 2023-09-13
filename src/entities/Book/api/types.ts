export type BookResponseType = {
    id: string
    volumeInfo: BookVolumeType
}

export type BookVolumeType = {
    title: string,
    authors: string[],
    categories: string[],
    description: string,
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    }
}

export type BooksResponseType = {
    totalItems: number,
    items: BookResponseType[]
}
