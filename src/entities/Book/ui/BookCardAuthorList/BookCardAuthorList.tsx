type PropsType = {
    authors: string[]
}

export const BookCardAuthorList = ({authors}:PropsType) => {
    return (
        <div className="italic overflow-hidden whitespace-nowrap text-ellipsis text-[20px]">{authors && authors.map(author => ` ${author}`)}
        </div>
    )
}