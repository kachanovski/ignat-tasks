import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './Input.module.css'

type PropsInput = {
    addItem?: () => void
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string
    onBlur?: () => void
    error?: string | null
}

function Input(props: PropsInput) {

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (props.addItem) {
            if (e.key === "Enter") {
                props.addItem()
            }
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
