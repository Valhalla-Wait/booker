import { Link } from "react-router-dom"
import { CategoryItem } from "./CategoryItem"

export interface BookI {
    id: string
    title: string,
    subtitle: string,
    authors: string[],
    description: string,
    categories: string[],
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    }
}

export const BookItem = ({
    id,
    title,
    categories,
    authors,
    imageLinks
}: BookI) => {
    return (
        <Link to={`/${id}`}>
            <div className="w-[300px] h-[400px] shadow-default flex flex-col cursor-pointer overflow-hidden rounded-[15px] duration-200 hover:hover:scale-110">
                <div className="min-h-[220px] flex items-center justify-center bg-slate-100">
                    <img src={imageLinks?.thumbnail} alt="bookImg" />
                </div>
                <div className="flex flex-col p-[15px] h-full gap-[15px]  ">
                    <div className="font-bold overflow-hidden whitespace-nowrap text-ellipsis text-[24px]">{title}</div>
                    <div className="flex overflow-hidden  gap-[5px]">{categories && categories.map((category,index) => <CategoryItem key={index} title={category} />)}</div>
                    <div className="italic overflow-hidden whitespace-nowrap text-ellipsis text-[20px]">{authors && authors.map(author => `${author}, `)}</div>
                </div>
            </div>
        </Link>
    )
}