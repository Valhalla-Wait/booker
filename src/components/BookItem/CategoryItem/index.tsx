type PropsType = {
    title: string
}

export const CategoryItem = ({title}:PropsType) => {
    return(
        <div className="px-[10px] bg-slate-500 text-white rounded-[20px] text-center w-min">
            {title}
        </div>
    )
}