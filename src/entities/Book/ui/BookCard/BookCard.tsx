import { Link } from "react-router-dom"
import { usePrefetch } from "../../api/bookApi"
import { BookVolumeType } from "../../api/types"
import { BookCardAuthorList } from "../BookCardAuthorList/BookCardAuthorList"
import { BookCardCategoryList } from "../BookCardCategoryList/BookCardCategoryList"
import { BookCardConteiner } from "../BookCardConteiner/BookCardConteiner"
import { BookCardImage } from "../BookCardImage/BookCardConteiner"

type PropsType = Omit<BookVolumeType, 'description'> & {
    id: string
}

export const BookCard = ({
    id,
    title,
    categories,
    authors,
    imageLinks
}: PropsType) => {
    
    const prefetchBook = usePrefetch('getBookById')

    const prefetchBookHandler = () => prefetchBook(id)

    return (
        <Link to={`/${id}`}>
            <BookCardConteiner onMouseEnter={prefetchBookHandler}>
                <BookCardImage imageLinks={imageLinks} title={title} />
                <div className="flex flex-col p-[15px] h-full gap-[15px]  ">
                    <div className="font-bold dot-crop text-[24px]">{title}</div>
                    <BookCardAuthorList authors={authors} />
                    <BookCardCategoryList categories={categories} />
                </div>
            </BookCardConteiner>
        </Link>
    )
}