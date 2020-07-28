import React from 'react';
import style from './Checkbox.module.css'


function Checkbox() {

    return (
        <div>
            <input className={style.checkbox} type='checkbox'/>
        </div>
    );
}

export default Checkbox;
