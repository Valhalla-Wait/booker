import { Listbox, Transition } from "@headlessui/react"
import { useState,Fragment } from "react"

type PropsType = {
    type: 'category' | 'sort'
}

interface ListItemI {
    id: number,
    title: string
}

const Lists = {
    category: [
        {
            id: 0,
            title: 'all'
        },
        {
            id: 1,
            title: 'art'
        },
        {
            id: 2,
            title: 'biography'
        },
        {
            id: 3,
            title: 'computers'
        },
        {
            id: 4,
            title: 'history'
        },
        {
            id: 5,
            title: 'medical'
        },
        {
            id: 6,
            title: 'poetry'
        },
    ],
    sort: [
        {
            id: 0,
            title: 'relevance'
        },
        {
            id: 1,
            title: 'newest'
        }
    ]
}

export const FilterField = ({ type }: PropsType) => {
    const [selectItem, setSelectItem] = useState<ListItemI>(Lists[type][0])
    return (
        <Listbox className='' value={selectItem} onChange={setSelectItem}>
            <div className="relative w-[150px]">
                <Listbox.Button className='h-[40px] font-semibold relative shadow-default bg-white w-full'>{selectItem.title}</Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className='absolute w-[150px]'>
                        {Lists[type].map((item) => (item.id !== selectItem.id) && <Listbox.Option className='bg-white border-[1px] border-slate-100 shadow-default cursor-pointer p-[10px] text-center font-semibold hover:bg-slate-100'
                            key={item.id}
                            value={item}
                        >
                            {item.title}
                        </Listbox.Option>)}
                    </Listbox.Options>
                </Transition>

            </div>
        </Listbox>
        // <select className="shadow-default">
        //     {
        //         Lists[type].map(item => <option>{item.title}</option>)
        //     }
        // </select>
    )
}