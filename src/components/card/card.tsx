import Link from "next/link"
import React from "react"

export interface ICard {
    children?: React.ReactNode,
    title?: string,
    link?: string
}

export default function Card({ children, title, link }: ICard) {
    return (
        <Link href={link?link:"/"}>
            <div className="transition p-4 rounded-3xl bg-white text-black hover:scale-125 h-64 hover:drop-shadow-2xl hover:z-1000">
                <div className="font-extrabold text-3xl">
                    {title}
                </div>
                <div className="mt-2">
                    {children}
                </div>
            </div>
        </Link>
    )
}