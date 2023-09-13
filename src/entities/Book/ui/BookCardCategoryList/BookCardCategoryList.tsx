import { CategoryItem } from "@/entities/Category"

type PropsType = {
    categories: string[]
}

export const BookCardCategoryList = ({categories}:PropsType) => {
    return (
        <div className="flex overflow-hidden gap-[5px]">{categories && <CategoryItem title={categories[0]} />}</div>
    )
}