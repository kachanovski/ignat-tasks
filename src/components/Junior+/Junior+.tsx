import React from 'react';
import style from '../PreJunior/PreJunior.module.css'
import {RequestsAPI} from "./13-task/RequestsAPI";

function JuniorPlus() {

    return (
        <div >
            <div className={style.preJuniorPage}>
                <div className={style.column}>
                    <RequestsAPI />
                </div>
                <div className={style.columnEven}>
                    2
                </div>
                <div className={style.column}>
                    3

                </div>
                <div className={style.columnEven}>
                    4
                </div>
            </div>
        </div>
    );
}

export default JuniorPlus;
