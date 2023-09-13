type PropsType = {
    imageLinks: {
        thumbnail: string
    },
    title:string
}

export const BookCardImage = ({imageLinks, title}:PropsType) => {
    return(
        <div className="min-h-[220px] flex items-center justify-center bg-slate-100">
                    {
                        imageLinks?.thumbnail ?
                        <img src={imageLinks.thumbnail} alt={title} />
                        :
                        <div className="text-slate-300 font-bold text-[32px]">No Photo</div>
                    }
                    
                </div>
    )
}