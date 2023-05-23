export interface IExPanel{
    children?:React.ReactNode,
    extraclassname?:string,
    title?:string
}

export default function ExPanel({children, title, extraclassname}:IExPanel){
    return(
        <div className={`p-6 border border-gray-300 rounded-3xl m-2 ${extraclassname}`}>
            <div className="font-bold text-2xl mb-4">
                {title}
            </div>
            {children}
        </div>
    )
}