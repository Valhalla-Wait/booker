type PropsType = {
    title: string
}

export const CategoryItem = ({title}:PropsType) => {
    return(
        <div className="px-[10px] bg-slate-500 text-white rounded-[20px] text-center max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
        </div>
    )
}