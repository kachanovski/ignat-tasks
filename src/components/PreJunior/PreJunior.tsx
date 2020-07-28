import React from 'react';
import style from './PreJunior.module.css'
import {FilterValueType, TasksType} from "../../App";
import MessageComponent from "./MessageComponent/MessageComponent";
import TasksComponent from "./TasksComponent/TasksComponent";
import InputComponent from "./InputComponent/InputComponent";
import Checkbox from "../../common/Checkbox/Checkbox";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";


type PropsPreJunior = {
    name: string
    time: string
    text: string
    tasks: Array<TasksType>
    changeFilter: (priority: FilterValueType) => void
    removeTask: (id: number) => void
}

function PreJunior(props: PropsPreJunior) {

    return (
        <div className={style.preJuniorPage}>

            <div className={style.column}>
                <MessageComponent name={props.name} time={props.time} text={props.text}/>
            </div>
            <div className={style.columnEven}>

                <TasksComponent tasks={props.tasks}
                                changeFilter={props.changeFilter}
                                removeTask={props.removeTask}/>
            </div>
            <div className={style.column}>

                <InputComponent/>
            </div>
            <div className={style.columnEven}>

                <Checkbox/>
                <Button value="ANY"/>
                <Input/>
            </div>
        </div>
    );
}

export default PreJunior;
