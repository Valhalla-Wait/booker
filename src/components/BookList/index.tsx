import { useSelector } from "react-redux"
import { useAppDispatch } from "../../store"
import { fetchBooks, fetchMoreBooks } from "../../store/slice/booksSlice"
import { searchParamsDataSelector } from "../../store/slice/search/selectors"
import { booksDataSelector, moreBooksIsFetchingSelector } from "../../store/slice/selectors"
import { BookI } from "../../store/slice/types"
import {BookItem } from "../BookItem"

type PropsType = {
    bookList: BookI[]
}

export const BookList = ({bookList}: PropsType) => {

    // const [getBooks, data] = useGetBooksQuery()

    const books = useSelector(booksDataSelector)
    const isFetching = useSelector(moreBooksIsFetchingSelector)

    const dispatch = useAppDispatch()

    const getNextPageBooks = () => dispatch(fetchMoreBooks())

    // dispatch(fetchBooks())

    return(
        <div className="z-0 items-center flex flex-col gap-[50px] pb-[50px]">
            <div className="flex gap-[30px] justify-center flex-wrap">
            {books.map((book, index) => <BookItem key={index} {...book} />)}
            </div>
            
            {!!bookList.length && <button onClick={getNextPageBooks} className="shadow-default text-[21px] w-[170px] font-semibold px-[30px] rounded-[20px]">
                {isFetching ? 'Loading...' : 'Load more'}
            </button>}
        </div>
    )
}