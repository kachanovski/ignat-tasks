import React, {ChangeEvent, useState} from 'react';

type RadioType = {
    id: string
    name: string
    checked: string
}

function Radio() {

    let [value] = useState<Array<RadioType>>([
        {id: "1", name: "male", checked: "male"},
        {id: "2", name: "female", checked: "female"},
    ])
    let [checked, setChecked] = useState("1")

    function onchangeName(e: ChangeEvent<HTMLInputElement>) {
        debugger
        setChecked(e.currentTarget.value)
    }

    return (
        <div>
            {
                value.map(v => {
                    return (
                        <label>
                            <input type={"radio"} key={v.id} name={v.name}  onChange={onchangeName} value={v.id} checked={checked === v.id}/>
                            <span>{v.name}</span>
                        </label>
                    )
                })
            }
        </div>

    );
}

export default Radio;


