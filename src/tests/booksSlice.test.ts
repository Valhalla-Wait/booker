import { booksSlice } from '@/entities/Book';
import 'whatwg-fetch';

test('return initial state', () => {
    expect(booksSlice.reducer(undefined, {type: undefined})).toEqual({
        books: [],
        totalItems: null,
        isFetching: false,
        isFetchingMoreBooks: false,
        error: ''
    })
})