import { MouseEventHandler } from "react";
import ExButton, { ButtonType } from "../basic-ui/button";

export interface MenuBurger {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function MenuBurger(P:MenuBurger) {
    return (
        <ExButton buttontype={ButtonType.DEFAULT} onClick={P.onClick}>
            = Menu
        </ExButton>
    )
}