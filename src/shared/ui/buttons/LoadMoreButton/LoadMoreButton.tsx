type PropsType = {
    onClick: () => void
    isFetching: boolean
}

export const LoadMoreButton = ({onClick,isFetching}:PropsType) => {
    return (
        <button onClick={onClick} className="shadow-default text-[21px] w-[170px] font-semibold px-[30px] rounded-[20px]">
            {isFetching ? 'Loading...' : 'Load more'}
        </button>
    )
}