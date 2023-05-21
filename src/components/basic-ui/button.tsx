import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export enum ButtonType {
    DEFAULT = 0,
    OK = 1,
    WARNING = 2
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children?:React.ReactNode,
    buttonType:ButtonType
}

export default function ExButton(props:ButtonProps){
    const type = {
        0:"bg-gray-300 hover:bg-gray-400",
        1:"bg-sky-500 hover:bg-sky-600 text-white",
        2:"bg-red-500 hover:bg-red-600 text-white"
    }
    return(
        <button className={`transition w-fit p-2 px-4 mt-2 mx-0.5 rounded-2xl active:translate-y-1 ${type[props.buttonType]}`} {...props}>{props.children}</button>
    )
}