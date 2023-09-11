import { Listbox, Transition } from "@headlessui/react"
import { Fragment } from "react"

type FilterType = 'category' | 'sort'

type PropsType = {
    type: FilterType,
    onChange: (filterItem: ListItemI) => void,
    value: ListItemI,
}

export interface ListItemI {
    id: number,
    title: string
}

// export enum Categories {
//     'all',
//     'art',
//     'biography',
//     'computers',
//     'history',
//     'medical',
//     'poetry',
// }

// export enum Sort {
//     'relevance',
//     'newest',
// }

export const FilterList = {
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

export const FilterField = ({ type, onChange, value}: PropsType) => {

    const onChangeHandler = (item: ListItemI) => onChange(item)

    return (
        <Listbox className='w-[110px] sm:w-[150px]' value={value} onChange={onChangeHandler}>
            <div className="relative">
                <Listbox.Button className='h-[40px] font-semibold relative shadow-default bg-white w-full'>{value.title}</Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className='absolute w-[inherit]'>
                        {FilterList[type].map((item) => (item.id !== value.id) && <Listbox.Option className='bg-white border-[1px] border-slate-100 shadow-default cursor-pointer p-[10px] text-center font-semibold hover:bg-slate-100'
                            key={item.id}
                            value={item}
                        >
                            {item.title}
                        </Listbox.Option>)}
                    </Listbox.Options>
                </Transition>

            </div>
        </Listbox>
    )
}