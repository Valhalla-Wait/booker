import { Listbox, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { FilterOptions } from "../../model/consts"
import { FilterType } from "../../model/types"
import { FilterFieldListButton } from "../FilterFieldListButton/FilterFieldListButton"
import { FilterFieldListOption } from "../FilterFieldListOption/FilterFieldListOption"


type PropsType = {
    type: FilterType,
    onChange: (filterItem: string) => void,
    selectItem: string,
}

export const FilterField = ({ type, onChange, selectItem }: PropsType) => {

    const onChangeHandler = (item: string) => onChange(item)

    return (
        <Listbox className='w-[110px] sm:w-[150px]' value={selectItem} onChange={onChangeHandler}>
            <div className="relative">
                <FilterFieldListButton>
                    {selectItem}
                </FilterFieldListButton>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className='absolute w-[inherit]'>
                        {
                            FilterOptions[type].map((item, index) =>
                                (item !== selectItem)
                                &&
                                <FilterFieldListOption value={item} key={index} />)
                        }
                    </Listbox.Options>
                </Transition>

            </div>
        </Listbox>
    )
}