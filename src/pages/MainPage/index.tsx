import { BookList } from "../../components/BookList"
import { Search, SearchDataI } from "../../components/Search"
import { useLazyGetBooksQuery } from "../../store/slice/booksSlice"
// import { useLazyGetBooksQuery } from "../../store/slice/booksSlice"

export const MainPage = () => {

    const [getBooks, {data}] = useLazyGetBooksQuery<any>()

    const getBooksHandler = (searchData:SearchDataI) => getBooks({
        title: searchData.inputValue,
        orderBy: searchData.sort.title,
        category: searchData.category.title
    })

    return (
        <div className="flex items-center flex-col mx-auto justify-flext-start pt-[15%] max-w-[1200px] px-[50px] gap-[20px]">
            <Search onSearch={getBooksHandler}/>
            <div>{data && `Найдено книг: ${data.totalItems}`}</div>
            <BookList bookList={data?.items ? data.items.map((book:any) => ({
                id: book?.id,
                ...book?.volumeInfo,
            })) : []} />
        </div>
    )
}