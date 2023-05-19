'use client'
import { useState } from "react";
import HeaderMenu from "./header-menu";
import MenuAvatar from "./menu-avatar";
import MenuBurger from "./menu-burger";

export default function Header(){
    const [showMenu,setShowMenu] = useState(false)
    return (
        <header>
            <div className="fixed flex flex-row w-full h-12 bg-red-500 justify-between p-3">
                <MenuBurger onClick={()=>{setShowMenu(val=>true)}}/>
                <MenuAvatar/>
            </div>
            <HeaderMenu setShow={setShowMenu} show={showMenu}/>
        </header>
    )
}