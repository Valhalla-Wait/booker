import { useState } from "react"
import { useLazyGetPostsQuery } from "../../store/slice/booksSlice"
import { FilterField } from "../FilterField"
import { SearchField } from "../SearchField"

export const Search = () => {
  
    const [searchData, setSearchData] = useState({
    inputData: '',
    category: 'all',
    sort: 'relevance'
})

    const setInputDataHandler = (e:React.ChangeEvent<HTMLInputElement>) => setSearchData(prev => ({
        ...prev,
        inputData: e.currentTarget.value
    }))

    // const setCategoryHandler = () => setSearchData(prev => ({
    //     ...prev,
    //     category: e.currentTarget.value
    // }))
    // const setSortHandler = () => setSearchData(prev => ({
    //     ...prev,
    //     sort: e.currentTarget.value
    // }))

    const [getPosts, data] = useLazyGetPostsQuery()

    const getBooks = () => {
        getPosts({
            title:  searchData.inputData
        })
    }

    return (
        <div className="grid gap-[20px] max-w-[600px] justify-items-center w-full z-10 sticky top-[30px]">
            <SearchField startSearching={getBooks} />
            <div className="flex w-full justify-between">
                <FilterField type="category" />
                <FilterField type="sort" />
            </div>
        </div>
    )
}