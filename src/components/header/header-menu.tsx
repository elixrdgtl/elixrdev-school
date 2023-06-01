'use client'

import { Dispatch, useState } from "react"
import ExButton, { ButtonType } from "../basic-ui/button"
import ExHeaderItem from "./header-menu-item"

export interface HeaderMenu {
    show: boolean,
    setShow: Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderMenu(P: HeaderMenu) {
    return (
        <div className={`
            transition transform fixed top-0 bg-black/50 drop-shadow-xl w-72 h-screen backdrop-blur-lg
            ${P.show ? "" : "-translate-x-72"}
        `}>
            <div className="p-4">
                <ExButton buttontype={ButtonType.WARNING} onClick={() => { P.setShow(val => false) }}>
                    {"< Close"}
                </ExButton>
            </div>
            <div className="p-4">
                <ul className="p-4 flex flex-col gap-6">
                    {
                        [
                            {label:"Home",href:"/"},
                            // {label:"Register",href:"register"},
                            // {label:"Blog",href:"blog"},
                        ].map((item,key) => {
                          return(
                            <ExHeaderItem key={key} item={item.label} href={item.href}/>
                          )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}