import React from 'react';
import style from '../PreJunior/PreJunior.module.css'
import LocalStorageTask from './LocalStorageTask/LocalStorageTask';
import EditableSpan from "../../common/EditableSpan/EditableSpan";


function Junior() {

    return (
        <div className={style.preJuniorPage}>
            <div className={style.column}>
                1
                <EditableSpan/>
            </div>
            <div className={style.columnEven}>
                2
                <LocalStorageTask/>
            </div>
            <div className={style.column}>
                3

            </div>
            <div className={style.columnEven}>
                4

            </div>
        </div>

    );
}

export default Junior;
