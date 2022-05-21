import React from "react"
import styles from './Button.module.css'

interface ButtonProps {
    title: string
}

const Button: React.FC<ButtonProps> = ({title}) => {
    return (
        <button className={styles.maButton}>
            {title}
        </button>
    )
}

export default Button
