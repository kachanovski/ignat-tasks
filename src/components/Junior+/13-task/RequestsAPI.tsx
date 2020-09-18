import React, {useEffect, useState} from "react";
import axios from 'axios'

export const RequestsAPI = () => {

    const [state, setState] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: state})
            .then((res) => {
                debugger
                setState(res.data.yourBody.success)
                setError(res.statusText)
            })
            .catch(() => {
                setError("error")
            })
    }, [state])

    return (
        <div>
            <input type={'checkbox'} checked={state} onChange={(e) => {
                setState(e.currentTarget.checked)
            }}/>
            {error}
        </div>
    )
}
