import { CategoryType } from "../../model/types"

export const CategoryItem = ({title, fullContent}:CategoryType) => {
    return(
        <div className={`px-[10px] bg-slate-500 text-white rounded-[20px] text-center ${!fullContent ? 'max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis' : ''}`}>
            {title}
        </div>
    )
}