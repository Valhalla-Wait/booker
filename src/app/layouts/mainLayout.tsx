import { BaseLayout } from "./baseLayout"

export const MainLayout = ({children}:{
    children:React.ReactNode
}) => {
    return(
        <BaseLayout className="pb-[50px] px-[40px]">
            {children}
        </BaseLayout>        
    )
}