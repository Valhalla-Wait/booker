import { searchSlice } from "../model/searchSlice"
import 'whatwg-fetch';

describe('searchSlice', () => {
    it('should update search params', () => {
        const payload = {
            title: 'title1',
                orderBy: 'sort',
                category: 'all',
                page: 2,
        }
        const action = {
            type: searchSlice.actions.setSearchParams.type, payload
        }
        const result = searchSlice.reducer(undefined, action)
        expect(result.data).toEqual(payload)
    })
})