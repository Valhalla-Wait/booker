export type QueryParamsType = {
    title?: string,
    orderBy?: string,
    category?: string,
    page?: number
}

export type ReducerType = {
    data: QueryParamsType,
}