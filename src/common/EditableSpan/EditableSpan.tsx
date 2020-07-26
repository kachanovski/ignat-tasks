import React, {useState} from 'react';

function EditableSpan(props:any) {

    let [editMode, setEditMode] = useState(true)

    const activateEditMode = () => {
        setEditMode(false)
    }
    const deactivateEditMode = () => {
        setEditMode(true)
    }

    return (
        <div>

            {editMode
                ? <span onClick={activateEditMode}>{props.value}</span>
                : <input onChange={props.onChange} value={props.value} onBlur={deactivateEditMode} />}



        </div>
    );
}

export default EditableSpan;
