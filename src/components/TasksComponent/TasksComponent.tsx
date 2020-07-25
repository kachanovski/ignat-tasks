import React from 'react';
import {FilterValueType, TasksType} from "../../App";
import style from './TasksComponent.module.css'


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

/*
  let changeFilter =(e:ChangeEvent<HTMLSelectElement>) => {
        alert() }
*/
    return (
        <div>
            <div>
                <h3>TasksList</h3>
              {/*  <select value="low" onChange={changeFilter}>
                    <option value="all" >All</option>
                    <option value="higth" >Hight</option>
                    <option value="middle" >Middle</option>
                    <option value="low">Low</option>
                </select>*/}
            </div>

            <div>
                {props.tasks.map(t => {
                    const removeTask = () => {
                        props.removeTask(t.id)
                    }

                    return (
                        <li key={t.id}><span>{t.title}</span> <span> - {t.priority}</span>
                            <button onClick={removeTask}>X</button>
                        </li>
                    )
                })}
            </div>

            <button value="all" onClick={onClickAllHandler}>All</button>
            <button value="higth" onClick={onClickHigthHandler}>Hight</button>
            <button value="middle" onClick={onClickMiddleHandler}>Middle</button>
            <button value="low" onClick={onClickLowHandler}>Low</button>

        </div>

    );
}

export default TasksComponent;
