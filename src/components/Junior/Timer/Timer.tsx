import React, {useEffect, useState} from 'react';
import moment from 'moment';
import style from './Timer.module.css'

const Timer = () => {
    const [seconds, setSeconds] = useState(moment().format("h:mm:ss a"));
    const [isActive, setIsActive] = useState(false);
    const [list, setList] = useState<typeof seconds>();
    const [tooltip, setTooltip] = useState<boolean>(false);


    function start() {
        setIsActive(true);
        setList(seconds)
    }
    function stop() {
        setSeconds(seconds);
        setIsActive(false);
    }
    function tooltipShow() {
        setTooltip(true)
    }
    function tooltipHide() {
        setTooltip(false)
    }

    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(moment().format("h:mm:ss a"));
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);


    return (
        <div>
            <div>
                {tooltip
                    ? <span className={style.tooltip}>{moment().format("MMM Do YY")}</span>
                    : ""
                } <br/>
                <span onMouseLeave={tooltipHide} onMouseOver={tooltipShow}>{seconds}</span>
            </div>
            <div>
                <button onClick={start}>
                    start
                </button>
                <button onClick={stop}>
                    stop
                </button>
            </div>
            {list}
        </div>
    );
};

export default Timer;