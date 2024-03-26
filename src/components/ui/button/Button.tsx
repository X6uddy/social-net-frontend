import { InputHTMLAttributes } from "react";

import { Loader } from "../loader/Loader";

import styles from './Button.module.scss';

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
}

export function Button({isLoading, children}: IButton) {
    return <button className={styles.button} disabled={isLoading}>
        {isLoading ? <Loader/> : children}
    </button>
}
