import React, {useState} from 'react';
import './App.css';
import MessageComponent from "./components/MessageComponent/MessageComponent";
import TasksComponent from "./components/TasksComponent/TasksComponent";


export type FilterValueType = "all" | "higth" | "low" | "middle"

export type TasksType = {
    id: number
    title: string
    priority: string
}

let state = {
    name: 'Aliaksander K.',
    text: "it-incubator",
    time: "20:00"
}

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'eat', priority: 'low'},
        {id: 2, title: 'eat', priority: 'midle'},
        {id: 3, title: 'eat', priority: 'higth'},
        {id: 4, title: 'eat', priority: 'low'},
        {id: 5, title: 'eat', priority: 'midle'},
    ])

    function removeTask(id: number) {
        let newTasks = tasks.filter(t => t.id !== id)
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValueType>("all")

    let tasksFiltered = tasks
    switch (filter) {
        case "all":
            tasksFiltered = tasks
            break
        case "higth":
            tasksFiltered = tasks.filter(t => t.priority === "higth");
            break
        case "middle":
            tasksFiltered = tasks.filter(t => t.priority === "midle");
            break
        case "low":
            tasksFiltered = tasks.filter(t => t.priority === "low");
            break

    }


    function changeFilter(priority: FilterValueType) {
        setFilter(priority)
    }

    return (
        <div className="App">
            <MessageComponent name={state.name} time={state.time} text={state.text}/>
            <TasksComponent tasks={tasksFiltered}
                            changeFilter={changeFilter}
                            removeTask={removeTask}/>
        </div>
    );
}

export default App;
