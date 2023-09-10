import { useEffect, useState } from "react"
import { useLazyGetBooksQuery } from "../../store/slice/booksSlice"
import { FilterField, ListItemI } from "../FilterField"
import { SearchField } from "../SearchField"

type PropsType = {
    onSearch: (searchData: SearchDataI) => void
}

export interface SearchDataI {
    inputValue?: string,
    category: ListItemI,
    sort: ListItemI
}
export const Search = ({onSearch}: PropsType) => {

    const [searchData, setSearchData] = useState<SearchDataI>({
        inputValue: '',
        category: {
            id: 0,
            title: 'all'
        },
        sort: {
            id: 0,
            title: 'relevance'
        }
    })

    const setInputDataHandler = (inputValue: string) => setSearchData(prev => ({
        ...prev,
        inputValue
    }))

    const setCategoryHandler = (category: ListItemI) => setSearchData(prev => ({
        ...prev,
        category
    }))
    const setSortHandler = (sort: ListItemI) => setSearchData(prev => ({
        ...prev,
        sort
    }))

    useEffect(()=>{
        onSearch(searchData)
    }, [searchData.category, searchData.sort])

    // const [getBooks, data] = useLazyGetBooksQuery()

    const getBooksHandler = () => onSearch(searchData)

    console.log(searchData)

    return (
        <div className="grid gap-[20px] max-w-[600px] justify-items-center w-full z-10 sticky top-[30px]">

            <SearchField
                inputValue={searchData.inputValue}
                onChangeInput={setInputDataHandler}
                onSearch={getBooksHandler}
            />
            <div className="flex w-full justify-between">
                <FilterField
                    value={searchData.category}
                    onChange={setCategoryHandler}
                    type="category" />
                <FilterField
                    value={searchData.sort}
                    onChange={setSortHandler}
                    type="sort" />
            </div>


        </div>
    )
}