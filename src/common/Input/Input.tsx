import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Input.module.css'


function Input(props: any) {


    let [value, setValue] = useState("11")
    let [error, setError] = useState<string | null>(null)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValue(e.currentTarget.value)
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addItem()
        }
    }

    const addItem = () => {
        if (value.trim() !== "") {
            props.onPressEnter(value.trim())
            setValue("")
        } else {
            setError("Введите значение")
        }
    }

debugger
    return (
        <div>
            <input value={value}
                   onChange={onChange}
                   autoFocus={true}
                   className={style.input}
                   onBlur={props.onBlur}
                   onKeyPress={onKeyPress}
                   type='text'/>
            {error && <div className={style.errorMessage}>{error}</div>}

        </div>
    );
}

export default Input;
