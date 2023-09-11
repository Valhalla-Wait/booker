import { createSlice } from '@reduxjs/toolkit'
import { ReducerType } from './types'
import { setSearchParams } from './actions'

const initialState:ReducerType = {
    data: {
        title: undefined,
        orderBy: undefined,
        category: undefined,
        page: 0,
    }
}

export const searchSlice = createSlice({
    name: 'searchParams', 
    initialState,
    reducers: {
        setSearchParams
    },
})
