import { FilterField } from "@/features/FilterField"
import { useState } from "react"
import { SearchField } from "../../features/SearchField"

type PropsType = {
    onSearch: (searchData: SearchDataI) => void
}

export interface SearchDataI {
    inputValue?: string,
    category: string,
    sort: string
}
export const Search = ({onSearch}: PropsType) => {

    const [searchData, setSearchData] = useState<SearchDataI>({
        inputValue: '',
        category: 'all',
        sort: 'relevance'
    })

    const setInputDataHandler = (inputValue: string) => setSearchData(prev => ({
        ...prev,
        inputValue
    }))

    const setCategoryHandler = (category: string) => {
        setSearchData(prev => ({
            ...prev,
            category
        }))
        onSearch({
            ...searchData,
            category
        })
    }
    const setSortHandler = (sort: string) => {
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
                    selectItem={searchData.category}
                    onChange={setCategoryHandler}
                    type="category" />
                <FilterField
                    selectItem={searchData.sort}
                    onChange={setSortHandler}
                    type="sort" />
            </div>


        </div>
    )
}