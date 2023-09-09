import { CategoryItem } from "../../components/BookItem/CategoryItem"

export const BookPage = () => {
    return (
        <div className="flex flex-col h-[100vh] mx-auto justify-center items-center max-w-[1200px] px-[50px] gap-[20px]">
            <div>
            <div className="min-h-[220px] bg-slate-500">IMH</div>
                <div className="flex flex-col p-[15px] h-full gap-[15px]  ">
                    <div className="font-bold overflow-hidden whitespace-nowrap text-ellipsis text-[24px]">{title}</div>
                    <div className="flex overflow-hidden  gap-[5px]">{categories.map(category => <CategoryItem title={category}/>)}</div>
                    <div className="italic overflow-hidden whitespace-nowrap text-ellipsis text-[20px]">{authors.map(author => `${author}, `)}</div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}