import { FilterField } from "../FilterField"

export const Filter = () => {
    return(
        <div className="flex ">
            <FilterField type="category" />
            <FilterField type="sort" />
        </div>
    )
}