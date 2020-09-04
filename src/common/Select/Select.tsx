import React, {ChangeEvent, useState} from 'react';
import style from './Select.module.css'

function Select() {
    let [value, setValue] = useState()
    let [title] = useState([
        {title: "A"},
        {title: "B"},
        {title: "C"},
        {title: "D"},
    ])

    function onchangeValue(e: ChangeEvent<HTMLSelectElement>) {
        value = e.currentTarget.value
        setValue(value)
    }

    return (
        <div>
            <select className={style.selectBox} value={value} onChange={onchangeValue}>
                {title.map(t => <option key={t.title} value={t.title}>{t.title}</option>)}
            </select>
        </div>
    );
}

export default Select;
