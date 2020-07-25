import React, {useState} from 'react';
import Input from "../../../common/Input";
import style from './InputComponent.module.css'


function InputComponent() {

    let [count, setCount] = useState(0)

    const addItem = (value: string) => {
        alert("Hello " + value)
        setCount(count + 1)
    }

    return (
        <div className={style.inputComponent}>
            <Input onPressEnter={addItem}/>
            <div>
                <span>{count}</span>
            </div>
        </div>
    );
}

export default InputComponent;
