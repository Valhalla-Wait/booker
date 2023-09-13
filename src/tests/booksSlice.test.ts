import 'whatwg-fetch';
import { booksSlice } from "../store/slice/booksSlice"

test('return initial state', () => {
    expect(booksSlice.reducer(undefined, {type: undefined})).toEqual({
        books: [],
        totalItems: null,
        isFetching: false,
        isFetchingMoreBooks: false,
        error: ''
    })
})