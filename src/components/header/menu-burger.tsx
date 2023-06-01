import { MouseEventHandler } from "react";
import ExButton, { ButtonType } from "../basic-ui/button";

export interface MenuBurger {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function MenuBurger(P:MenuBurger) {
    return (
        <ExButton buttontype={ButtonType.DEFAULT} extraclassname="bg-black/50 hover:bg-white hover:text-black" onClick={P.onClick}>
            = Menu
        </ExButton>
    )
}