import React from 'react';
import style from '../PreJunior/PreJunior.module.css'

function JuniorPlus() {

    return (
        <div >
            <div className={style.preJuniorPage}>
                <div className={style.column}>
                    1
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
