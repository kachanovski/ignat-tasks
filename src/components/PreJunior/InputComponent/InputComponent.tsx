import React, {ChangeEvent, useState} from 'react';
import Input from "../../../common/Input/Input";
import style from './InputComponent.module.css'
import Button from "../../../common/Button/Button";

type PropsInputComponent = {}

function InputComponent(props: PropsInputComponent) {

    let [value, setValue] = useState('')
    let [error, setError] = useState<string | null>(null)
    let [count, setCount] = useState(0)

    const addItem = () => {
        if (value.trim() !== "") {
            alert("Hello " + value)
        } else {
            setError("Введите значение")
        }
        setValue('')
        setCount(count + 1)
    }

    function onChangeValue (e:ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value)
    }


    return (
        <div className={style.inputComponent}>
            <Input error={error}
                   addItem={addItem}
                   value={value}
                   onChange={onChangeValue}
                   onPressEnter={addItem}/>
            <Button value="ADD" onClick={addItem}/>
            <div>
                <span>{count}</span>
            </div>
        </div>
    );
}

export default InputComponent;
