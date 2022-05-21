import React from "react"
import {ButtonProps} from './Button.types'
import styles from './Button.module.css'

const Button: React.FC<ButtonProps> = ({title}) => {
    return (
        <button className={styles.maButton}>
            {title}
        </button>
    )
}

export default Button
