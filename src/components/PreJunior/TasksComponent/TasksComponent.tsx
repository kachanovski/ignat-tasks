import React from 'react';
import {FilterValueType, TasksType} from "../../../App";
import Button from "../../../common/Button/Button";

type TasksPropsType = {
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (priority: FilterValueType) => void
}


function TasksComponent(props: TasksPropsType) {

    const onClickAllHandler = () => props.changeFilter("all")
    const onClickHigthHandler = () => props.changeFilter("higth")
    const onClickMiddleHandler = () => props.changeFilter("middle")
    const onClickLowHandler = () => props.changeFilter("low")

    return (
        <div>
            <div>
                <h3>TasksList</h3>
            </div>

            <Button value="all" onClick={onClickAllHandler}/>
            <Button value="higth" onClick={onClickHigthHandler}/>
            <Button value="middle" onClick={onClickMiddleHandler}/>
            <Button value="low" onClick={onClickLowHandler}/>

            <div>
                {props.tasks.map(t => {
                    const removeTask = () => {
                        props.removeTask(t.id)
                    }

                    return (
                        <li key={t.id}><span>{t.title}</span> <span> - {t.priority}</span>
                            <Button value='X' onClick={removeTask}/>
                        </li>
                    )
                })}
            </div>


        </div>

    );
}

export default TasksComponent;
