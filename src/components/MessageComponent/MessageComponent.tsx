import React from 'react';
import '../../App.css';
import style from  './MessageComponent.module.css'

type MessageType = {
    name: string
    text: string
    time: string
}


function MessageComponent(props: MessageType) {

    return (
        <div className={style.messageComponent}>
            <div className={style.photo}>avatar</div>
            <div className={style.messageBox}>
                <div className={style.name}>{props.name}</div>
                <div className={style.textMessage}>{props.text}</div>
                <div className={style.timeStyle}>{props.time} </div>
            </div>
        </div>

    );
}

export default MessageComponent;
