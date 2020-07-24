import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import '../../App.css';
import style from './InputComponent.module.css'


function InputComponent() {

    let [title, setTitle] = useState("")
    let [count, setCount] = useState(0)
    let [titleIsNull, setTitleIsNull] = useState<string | null>(null)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleIsNull(null)
        setTitle(e.currentTarget.value)
    }

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        setTitleIsNull(null)
        if (e.key === "Enter") {
            alertTitle()
        }
    }

    const alertTitle = () => {
        if (title.trim() !== "") {
            alert("Hello" + " " + title)
            setTitle('')
            setCount(count + 1)

        } else {
            setTitleIsNull("Введите значение")
        }

    }

    return (
        <div>
            <input placeholder='Введите значение'
                   className={titleIsNull ? style.error : ''}
                   onKeyPress={onPressEnter}
                   value={title}
                   onChange={onChangeValue}/>
            {titleIsNull && <div className={style.errorMessage}>{titleIsNull}</div>}
            <button onClick={alertTitle}>ADD</button>
            <div>
                <span>{count}</span>
            </div>
        </div>
    );
}

export default InputComponent;
