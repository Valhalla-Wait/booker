import { SearchIcon } from "@/shared/icons"

export const SearchButton = (props: {
    onClick: () => void
}) => {
    return(
        <button className="flex px-[10px] h-full items-center" {...props}>
            <SearchIcon />
        </button>
    )
}