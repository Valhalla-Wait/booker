import { MainLayout } from "@/app/layouts/mainLayout"
import { BookList } from "@/widgets/BookList"
import { Search, SearchDataI } from "@/widgets/Search"
import { useAppDispatch } from "@/shared/model/hooks"
import { useSelector } from "react-redux"
import { BookSelectors, BooksThunks } from "@/entities/Book"

export const MainPage = () => {
    const isFetching = useSelector(BookSelectors.booksIsFetchingSelector)
    const booksTotalCount = useSelector(BookSelectors.booksTotalCountSelector)
    const isError = useSelector(BookSelectors.booksErrSelector)

    const dispatch = useAppDispatch()


    const getBooksHandler = (searchData: SearchDataI) => dispatch(BooksThunks.fetchBooks({
        title: searchData.inputValue,
        orderBy: searchData.sort,
        category: searchData.category
    }))

    return (
        <MainLayout>
            <div className="flex items-center flex-col gap-[20px] pt-[35%]">
                <Search onSearch={getBooksHandler} />
                <div className="text-[24px] font-semibold">{booksTotalCount && `Найдено книг: ${booksTotalCount}`}</div>
                {isError && <div className="text-center">
                            <div className="text-[24px] font-semibold">Loading Books...</div>
                        </div>}
                {
                    isFetching ?
                        <div className="text-center">
                            <div className="text-[24px] font-semibold">Loading Books...</div>
                        </div>
                        :
                        <BookList />}
            </div>
        </MainLayout>
    )
}