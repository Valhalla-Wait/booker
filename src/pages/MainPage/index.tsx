import { useSelector } from "react-redux"
import { BookList } from "../../components/BookList"
import { Search, SearchDataI } from "../../components/Search"
import { useAppDispatch } from "../../store"
import { fetchBooks } from "../../store/slice/booksSlice"
import { booksDataSelector, booksIsFetchingSelector, booksTotalCountSelector } from "../../store/slice/selectors"
// import { useLazyGetBooksQuery } from "../../store/slice/booksSlice"

export const MainPage = () => {

    // const [getBooks, { data, isLoading }] = useLazyGetBooksQuery()
    const books = useSelector(booksDataSelector)
    const booksIsFetching = useSelector(booksIsFetchingSelector)
    const booksTotalCount = useSelector(booksTotalCountSelector)

    const dispatch = useAppDispatch()
    

    const getBooksHandler = (searchData: SearchDataI) => dispatch(fetchBooks({
        title: searchData.inputValue,
        orderBy: searchData.sort.title,
        category: searchData.category.title
    }))

    console.log(books)

    return (
        <div className="flex items-center flex-col mx-auto justify-flext-start pt-[15%] max-w-[1200px] px-[50px] gap-[20px]">
            <Search onSearch={getBooksHandler} />
            <div className="text-[24px] font-semibold">{booksTotalCount && `Найдено книг: ${booksTotalCount}`}</div>
            {
                booksIsFetching ?
                    'Loading Books...'
                    :
                    <BookList bookList={books.map((book) => book)} />}
        </div>
    )
}