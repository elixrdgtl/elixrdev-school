interface IExHeaderItem{
    item:string,
    href:string
}

export default function ExHeaderItem({item,href}:IExHeaderItem){
    return(
        <li className="transition hover:translate-x-2" >
            <a href={href}>{item}</a>
        </li>
    )
}