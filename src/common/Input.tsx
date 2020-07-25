import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Input.module.css'
import Button from "./Button";

type PropsInput = {
    onPressEnter: (value: string) => void
}

function Input(props: PropsInput) {


    let [value, setValue] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValue(e.currentTarget.value)
    }

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
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


    return (
        <div>
            <input value={value}
                   onChange={onChange}
                   className={style.input}
                   onKeyPress={onPressEnter}
                   type='text'/>
            <Button value="ADD" onClick={addItem}/>
            {error && <div className={style.errorMessage}>{error}</div>}

        </div>
    );
}

export default Input;
