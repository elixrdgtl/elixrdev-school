'use client'
import { useState } from "react";
import HeaderMenu from "./header-menu";
import MenuAvatar from "./menu-avatar";
import MenuBurger from "./menu-burger";

export default function Header(){
    const [showMenu,setShowMenu] = useState(false)
    return (
        <header>
            <div className="fixed top-0 flex flex-row w-full justify-between p-4">
                <MenuBurger onClick={()=>{setShowMenu(val=>true)}}/>
                <MenuAvatar/>
            </div>
            <HeaderMenu setShow={setShowMenu} show={showMenu}/>
        </header>
    )
}