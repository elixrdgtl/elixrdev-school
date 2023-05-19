import { MouseEventHandler } from "react";

export interface MenuBurger {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function MenuBurger(P:MenuBurger) {
    return (
        <button onClick={P.onClick}>
            =
        </button>
    )
}