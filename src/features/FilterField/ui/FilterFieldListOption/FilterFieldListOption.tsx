import { Listbox } from "@headlessui/react"

type PropsType = {
    value: string
}

export const FilterFieldListOption = ({value}:PropsType) => {
    return(
        <Listbox.Option className='bg-white border-[1px] border-slate-100 shadow-default cursor-pointer p-[10px] text-center font-semibold hover:bg-slate-100'
        value={value}
    >
        {value}
    </Listbox.Option>
    )
}