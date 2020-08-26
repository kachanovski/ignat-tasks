import React from "react";
import {initialState, sortUp, checkAge} from "./Tests/homeWorkReducer";
import Button from "../../common/Button/Button";

function SortArray() {

    const onClickUp = () => {
        debugger
        sortUp()
    }

    return (
        <div>
            <Button onClick={onClickUp} value={"UP"} />
            <Button value={"DOWN"} />
            <button onClick={() => {checkAge(18)}} value={"AGE"} >age</button>
            <div>
                {initialState.map(h => <div key={h.id}>{h.name} - {h.age}</div>)}
            </div>

        </div>
    )
}

export default SortArray
