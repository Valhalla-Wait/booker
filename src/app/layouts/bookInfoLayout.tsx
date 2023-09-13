import { BaseLayout } from "./baseLayout"

export const BookInfoLayout = ({children}:{
    children:React.ReactNode
}) => {
    return(
        <BaseLayout className="sm:p-[30px] md:p-[50px]">
            {children}
        </BaseLayout>
    )
}