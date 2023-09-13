export type QueryParamsType = {
    title?: string | null,
    orderBy?: string | null,
    category?: string | null,
    page?: number
}

export type ReducerType = {
    data: QueryParamsType,
}