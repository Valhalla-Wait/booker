import { useState } from "react"
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

    const setCategoryHandler = (category: ListItemI) => {
        setSearchData(prev => ({
            ...prev,
            category
        }))
        onSearch({
            ...searchData,
            category
        })
    }
    const setSortHandler = (sort: ListItemI) => {
        setSearchData(prev => ({
            ...prev,
            sort
        }))
        onSearch({
            ...searchData,
            sort
        })
    }

    const getBooksHandler = () => onSearch(searchData)
    

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