import { useState } from "react"
import { SearchButton } from "../../shared/buttons/SearchButton"

type PropsType ={
    startSearching: (searchFieldData: string) => void
}

export const SearchField = ({startSearching}:PropsType) => {
    
    const [inputData, setInputData] = useState('')

    const inputDataHandler = (e:React.ChangeEvent<HTMLInputElement>) => setInputData(e.currentTarget.value)

    const onKeyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => e.code === 'Enter' && startSearching(inputData)
    
    return (
        <div className="flex w-full shadow-default mt-[10px] bg-white items-center">
            <input onKeyDown={onKeyDownHandler} value={inputData} onChange={inputDataHandler} className="rounded-0 border-none w-full text-[21px] pl-[10px] h-[40px] focus:outline-none" type="text" placeholder="Книга..." />
            <div className=" hover:bg-slate-100 h-full">
                <SearchButton onClick={() => alert('click')} />
            </div>
        </div>
    )
}