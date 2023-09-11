import { SearchButton } from "../../shared/buttons/SearchButton"

type PropsType ={
    onSearch: () => void,
    onChangeInput: (inputData: string) => void,
    inputValue?: string
}

export const SearchField = ({onSearch, onChangeInput,inputValue}:PropsType) => {

    const inputDataHandler = (e:React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.currentTarget.value)

    const onKeyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => e.code === 'Enter' && onSearch()
    
    return (
        <div className="flex w-full shadow-default mt-[10px] bg-white items-center">
            <input onKeyDown={onKeyDownHandler} value={inputValue} onChange={inputDataHandler} className="rounded-0 border-none w-full text-[21px] pl-[10px] h-[40px] focus:outline-none" type="text" placeholder="Книга..." />
            <div className=" hover:bg-slate-100 h-full">
                <SearchButton onClick={onSearch} />
            </div>
        </div>
    )
}