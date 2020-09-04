import React, {useState} from "react";
import {hwReducer, usersStateType} from "./Tests/homeWorkReducer";
import {v1} from "uuid";

function SortArray() {

    let [users, setUsers] = useState<usersStateType>({
        users: [
            {id: v1(), name: "Bob", age: 12},
            {id: v1(), name: "Anya", age: 25},
            {id: v1(), name: "dima", age: 17},
            {id: v1(), name: "Masha", age: 26},
        ],
        filter: 18
    })


    const checkHandler = () => {
        /* let newState = hwReducer(users, {type: "CHECK", payload: 18})
         setUsers(newState)*/
        let newState: any = users.users
            .filter(h => h.age > users.filter)
        setUsers(newState)

    }
    const sortUpHandler = () => {
        let newState = hwReducer(users, {type: "SORT_UP", payload: 'up'})
        setUsers(newState)
    }
    const sortDownHandler = () => {
        let newState = hwReducer(users, {type: "SORT_DOWN", payload: "down"})
        setUsers(newState)
    }


    return (
        <div>
            <button onClick={checkHandler}>age</button>
            <button onClick={sortUpHandler}>SORT_UP</button>
            <button onClick={sortDownHandler}>SORT_DOWN</button>
            <div>
                {users.users
                    .map(h => <div key={h.id}>{h.name} - {h.age}</div>)}
            </div>
        </div>
    )
}

export default SortArray
