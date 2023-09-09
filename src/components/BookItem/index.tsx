import { Link } from "react-router-dom"
import { CategoryItem } from "./CategoryItem"

export interface BookI {
    id: number,
    img: string,
    title: string,
    categories: string[],
    authors: string[]
}

export const BookItem = ({
    id,
    img,
    title,
    categories,
    authors
}: BookI) => {
    return (
        <Link to={`/${id}`}>
            <div className="w-[300px] h-[400px] shadow-default flex flex-col cursor-pointer overflow-hidden rounded-[15px] duration-200 hover:hover:scale-110">
                <div className="min-h-[220px] bg-slate-500">{img}</div>
                <div className="flex flex-col p-[15px] h-full gap-[15px]  ">
                    <div className="font-bold overflow-hidden whitespace-nowrap text-ellipsis text-[24px]">{title}</div>
                    <div className="flex overflow-hidden  gap-[5px]">{categories.map(category => <CategoryItem title={category}/>)}</div>
                    <div className="italic overflow-hidden whitespace-nowrap text-ellipsis text-[20px]">{authors.map(author => `${author}, `)}</div>
                </div>
            </div>
        </Link>
    )
}