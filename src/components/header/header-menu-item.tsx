import Link from "next/link"

interface IExHeaderItem{
    item:string,
    href:string
}

export default function ExHeaderItem({item,href}:IExHeaderItem){
    return(
        <li className="transition hover:translate-x-2 w-fit" >
            <Link href={href}>{item}</Link>
        </li>
    )
}