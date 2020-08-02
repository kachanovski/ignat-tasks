import React, {ChangeEvent, useState} from 'react';
import EditableSpan from '../../../common/EditableSpan/EditableSpan';
import Button from "../../../common/Button/Button";
import {saveState, restoreState} from '../../../App';

type StateType = {
    value: string
}

function LocalStorageTask() {

    let [value, setValue] = useState('1')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    function setValueLS() {
        saveState<StateType>('test', {value})
    }

    function getValue() {
        const state: StateType = restoreState<StateType>("test", {value: ""});
        setValue(state.value)
    }

    return (
        <div>
            <EditableSpan value={value} onChange={onChangeValue}/>
            <Button onClick={setValueLS} value="save"/>
            <Button onClick={getValue} value="mode"/>
        </div>
    );
}

export default LocalStorageTask;
