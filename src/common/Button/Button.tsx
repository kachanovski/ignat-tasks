import React from 'react';
import style from './Button.module.css'


type ButtonType = {
    value?: string
    onClick?: () => void
}

function Button(props: any) {

    let classFor = props.value === 'X' ? `${style.deleteButton}` : `${style.button}`

    return (

        <button onClick={props.onClick}
                className={classFor}>{props.value}
        </button>

    );
}

export default Button;
