export interface IExPanel{
    children?:React.ReactNode,
    classNameExtra?:string,
    title?:string
}

export default function ExPanel({children, title, classNameExtra}:IExPanel){
    return(
        <div className={`p-6 border border-gray-300 rounded-3xl m-2 ${classNameExtra}`}>
            <div className="font-bold text-2xl mb-4">
                {title}
            </div>
            {children}
        </div>
    )
}