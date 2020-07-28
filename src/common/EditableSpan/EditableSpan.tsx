import React, {useState} from 'react';
import Input from "../Input/Input";

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
                ? <span className="span" onClick={activateEditMode}>{props.value}</span>
                : <Input onChange={props.onChange} value={props.value} onBlur={deactivateEditMode} />}



        </div>
    );
}

export default EditableSpan;
