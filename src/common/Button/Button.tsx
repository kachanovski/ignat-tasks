import React from 'react';
import './Button.css'


function Button(props: any) {

    let classFor = props.value === 'X' ? "deleteButton" : "button"

    return (

            <button onClick={props.onClick}
                className={classFor}>{props.value}
            </button>

    );
}

export default Button;
