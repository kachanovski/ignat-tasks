import React from 'react';
import './Button.css'

type PropsButton = {
    value: string
    onClick: () => void
}

function Button(props: PropsButton) {

    let classFor = props.value === 'X' ? "deleteButton" : "button"

    return (

            <button onClick={props.onClick}
                className={classFor}>{props.value}
            </button>

    );
}

export default Button;
