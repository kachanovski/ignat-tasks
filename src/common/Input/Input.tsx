import React, {KeyboardEvent} from 'react';
import style from './Input.module.css'


function Input(props: any) {

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addItem()
        }
    }

    return (
        <div>
            <input value={props.value}
                   onChange={props.onChange}
                   autoFocus={true}
                   onBlur={props.onBlur}
                   onKeyPress={onKeyPress}
                   className={style.input}
            />
            {props.error && <div className={style.errorMessage}>{props.error}</div>}

        </div>
    );
}

export default Input;
