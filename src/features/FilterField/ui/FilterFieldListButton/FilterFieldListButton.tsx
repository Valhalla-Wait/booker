import { Listbox } from "@headlessui/react"

type PropsType = {
    children: React.ReactNode
}

export const FilterFieldListButton = ({children}:PropsType) => {
    return(
        <Listbox.Button className='h-[40px] font-semibold relative shadow-default bg-white w-full'>
            {children}
        </Listbox.Button>
    )
}