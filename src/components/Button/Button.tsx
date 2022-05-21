import React from "react"
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({title}) => {
    return (
        <button style={{
            background: 'red',
            color: 'white',
        }}>{title}</button>
    )
}

export default Button
