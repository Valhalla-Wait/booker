import { BookList } from "../../components/BookList"
import { Search } from "../../components/Search"
// import { useLazyGetBooksQuery } from "../../store/slice/booksSlice"

export const MainPage = () => {
    // const [getBooks, data] = useLazyGetBooksQuery()
    // console.log(data)
    return (
        <div className="flex items-center flex-col mx-auto justify-flext-start pt-[15%] max-w-[1200px] px-[50px] gap-[20px]">
            <Search callback={() => alert('s')}/>
            <div className="text-[21px]">Найдено: 43</div>
            <BookList />
        </div>
    )
}