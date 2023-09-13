type PropsType = {
    children: React.ReactNode,
    onMouseEnter: () => void
}

export const BookCardConteiner = ({children, onMouseEnter}:PropsType) => {
    return(
        <div onMouseEnter={onMouseEnter} className="w-[300px] h-[400px] shadow-default flex flex-col cursor-pointer overflow-hidden rounded-[15px] duration-200 hover:hover:scale-110">
            {children}
        </div>
    )
}