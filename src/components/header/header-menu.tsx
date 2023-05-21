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
            transition transform fixed top-0 bg-gray-300 drop-shadow-xl w-72 h-screen
            ${P.show ? "" : "-translate-x-72"}
        `}>
            <div className="p-4">
                <ExButton buttonType={ButtonType.WARNING} onClick={() => { P.setShow(val => false) }}>
                    {"< Close"}
                </ExButton>
            </div>
            <div className="p-4">
                <ul className="p-4 flex flex-col gap-6">
                    {
                        ["Home"].map((item,key) => {
                          return(
                            <ExHeaderItem key={key} item={item} href={"/"}/>
                          )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}