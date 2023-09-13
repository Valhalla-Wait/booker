export const BaseLayout = ({children, className}:{
    children:React.ReactNode,
    className: string
}) => {
    return(
        <div className={`mx-auto max-w-[1200px] ${className}`}>
            {children}
        </div>
        
    )
}