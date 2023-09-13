import { BookInfoLayout } from "@/app/layouts/bookInfoLayout"
import { useGetBookByIdQuery } from "@/entities/Book/api/bookApi"
import { CategoryItem } from "@/entities/Category"
import { useNavigate, useParams } from "react-router-dom"

export const BookPage = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useGetBookByIdQuery(id as string)
    const navigate = useNavigate()

    const goBackHandler = () => navigate(-1)

    return (
        <BookInfoLayout>
            <div className="flex flex-col p-[30px] gap-[20px] bg-slate-100 shadow-default">
                <div>
                    {
                        isLoading ?
                            <div className="text-center">
                                <div className="text-[24px] font-semibold">Loading Book...</div>
                            </div>
                            :
                            <div className="grid gap-[20px]">


                                {
                                    isError ?
                                        <div className="grid gap-[20px] justify-items-center text-center">
                                            <div className="text-[24px] font-semibold">Oops, server error, try again later...</div>
                                            <button onClick={goBackHandler} className="underline w-min">Back</button>
                                        </div>

                                        :
                                        <>
                                            <button onClick={goBackHandler} className="underline w-min">Back</button>
                                            <div className="flex flex-col items-center justify-center gap-[30px] md:flex-row  md:justify-start">
                                                <div className="bg-slate-200 flex justify-center items-center max-w-[200px] min-h-[250px] w-full shadow-default">
                                                    <img src={data?.imageLinks.thumbnail} alt="bookImg" />
                                                </div>
                                                <div className="flex flex-col h-full gap-[15px] text-center items-center justify-evenly md:items-start md:text-left">
                                                    <div className="text-[32px] font-bold">
                                                        {data?.title}
                                                    </div>

                                                    <div className="flex overflow-hidden  gap-[5px]">{data?.categories?.map((category: string, index: number) => <CategoryItem key={index} fullContent title={category} />)}</div>

                                                    <div className="text-[21px] italic">{!!data?.authors && `Авторы: ${data?.authors.map((author: string) => ` ${author}`)}`}</div>

                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-[24px] font-semibold">Описание:</div>
                                                <div className="text-[18px] ">
                                                    {data?.description}
                                                </div>
                                            </div>
                                        </>
                                }

                            </div>
                    }
                </div>
                <div>

                </div>
            </div>
        </BookInfoLayout>

    )
}