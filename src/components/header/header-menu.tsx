'use client'

import { Dispatch, useState } from "react"

export interface HeaderMenu {
    show:boolean,
    setShow:Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderMenu(P:HeaderMenu) {
    return (
        <div className={`
            z-1000 transition transform fixed bg-green-500 w-72 h-screen
            ${P.show?"":"-translate-x-72"}
        `}>
            <button onClick={() => { P.setShow(val => false) }}>
                x
            </button>
        </div>
    )
}