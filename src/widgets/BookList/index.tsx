import { BookCard, BookSelectors, BooksThunks } from "@/entities/Book"
import { useAppDispatch } from "@/shared/model/hooks"
import { LoadMoreButton } from "@/shared/ui"
import { useSelector } from "react-redux"

export const BookList = () => {

    const books = useSelector(BookSelectors.booksDataSelector)
    const isFetching = useSelector(BookSelectors.moreBooksIsFetchingSelector)

    const dispatch = useAppDispatch()

    const getNextPageBooks = () => dispatch(BooksThunks.fetchMoreBooks())

    return (
        <div className="z-0 items-center flex flex-col gap-[50px]">
            <div className="flex gap-[30px] justify-center flex-wrap">
                {books.map((book, index) => <BookCard key={index} {...book} />)}
            </div>

            {!!books.length && <LoadMoreButton onClick={getNextPageBooks} isFetching={isFetching}/>}
        </div>
    )
}