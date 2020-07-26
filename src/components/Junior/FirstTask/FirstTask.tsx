import React, {ChangeEvent, useState} from 'react';
import EditableSpan from '../../../common/EditableSpan/EditableSpan';
import Button from "../../../common/Button/Button";

type StateType = {
    x: string
    y: number
}

function Task() {

let [value, setValue] = useState('1')
    let [state,setState] = useState<Array<StateType>>([])

    const onChangeValue = (e:ChangeEvent<HTMLInputElement>) =>{
    setValue(e.currentTarget.value)
    }


    //сохранить
    function saveState<T>(key: string, stateTask: T) {
        const stateAsString = JSON.stringify(stateTask);
        localStorage.setItem(key, stateAsString)
    }

    //получение сохраненного
    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    // сохраняем объект типа StateType в ячейке "test"
    saveState<StateType>("test", {x: value, y: 1});
debugger
    // получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста
    const stateTask: StateType = restoreState<StateType>("test", {x: "", y: 0});

    return (
        <div>
            <EditableSpan value={value} onChange={onChangeValue}/>
            <Button onClick={saveState} value="save"/>
            <Button onClick={restoreState} value="mode"/>
        </div>
    );
}

export default Task;
