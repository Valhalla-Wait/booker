import { useNavigate, useParams } from "react-router-dom"
import { CategoryItem } from "../../components/BookItem/CategoryItem"
import { useGetBookByIdQuery } from "../../store/slice/booksSlice"

export const BookPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetBookByIdQuery(id as string)
    const navigate = useNavigate()
    
    const goBackHandler = () => navigate(-1)

    console.log(data)
    return (
        <div className='flex items-center justify-center sm:p-[30px] md:p-[50px]'>
            
            <div className="flex flex-col w-full max-w-[1200px] p-[30px] gap-[20px] bg-slate-100 shadow-default">
                <div>
                    {
                        isLoading ?
                            'Loading Book...'
                            :
                            <div className="grid gap-[20px]">
                                <button onClick={goBackHandler} className="underline w-min">Back</button>
                                <div className="flex flex-col items-center justify-center gap-[30px] md:flex-row  md:justify-start">
                                    <div className="bg-slate-200 flex justify-center items-center max-w-[200px] min-h-[250px] w-full shadow-default">
                                        <img src={data?.volumeInfo?.imageLinks?.thumbnail} alt="bookImg" />
                                    </div>
                                    <div className="flex flex-col h-full gap-[15px] text-center items-center justify-evenly md:items-start md:text-left">
                                        <div className="text-[32px] font-bold">
                                            {data?.volumeInfo?.title}
                                        </div>

                                        <div className="flex overflow-hidden  gap-[5px]">{data?.volumeInfo?.categories?.map((category:string, index:number) => <CategoryItem key={index} fullContent title={category}/>)}</div>

                                        <div className="text-[21px] italic">{!!data?.volumeInfo?.authors && `Авторы: ${data?.volumeInfo?.authors.map((author:string) => ` ${author}`)}`}</div>

                                    </div>
                                </div>
                                <div>
                                    <div className="text-[24px] font-semibold">Описание:</div>
                                    <div className="text-[18px] ">
                                        {data?.volumeInfo?.description}
                                    </div>
                                </div>
                            </div>
                    }

                </div>
                <div>

                </div>
            </div>
        </div>

    )
}