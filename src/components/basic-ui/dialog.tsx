export interface Dialog {
    children: React.ReactElement,
    title?: string,
    open:boolean,
    set:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Dialog({ children, title, open, set }: Dialog) {
    return (
        <dialog open={open} className="w-full md:w-1/2 bg-transparent">
            <div className="bg-white p-4 m-4 rounded-2xl border border-gray-300 break-all">
                <div className="text-xl font-bold">
                    {title}
                </div>
                <div className="p-2">
                    {children}
                </div>
                <button onClick={()=>{set(false)}} className="p-2 px-4 mt-2 bg-gray-200 rounded-xl">close</button>
            </div>
        </dialog>
    )
}