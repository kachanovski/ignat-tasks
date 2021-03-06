import React, {useState} from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import PreJunior from "./components/PreJunior/PreJunior";
import Junior from './components/Junior/Junior';
import JuniorPlus from "./components/Junior+/Junior+";
import {HashRouter, Route} from 'react-router-dom'

export type FilterValueType = "all" | "higth" | "low" | "middle"

export type TasksType = {
    id: number
    title: string
    priority: FilterValueType
}

let state = {
    name: 'Aliaksander K.',
    text: "it-incubator",
    time: "20:00"
}

//сохранить в LocalStorage
export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

//получение сохраненного из LocalStorage
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'eat', priority: 'low'},
        {id: 2, title: 'eat', priority: 'middle'},
        {id: 3, title: 'eat', priority: 'higth'},
        {id: 4, title: 'eat', priority: 'low'},
        {id: 5, title: 'eat', priority: 'middle'},
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
            tasksFiltered = tasks.filter(t => t.priority === "middle");
            break
        case "low":
            tasksFiltered = tasks.filter(t => t.priority === "low");
            break

    }

    function changeFilter(priority: FilterValueType) {
        setFilter(priority)
    }


    return (

        <HashRouter>
                <div>
                    <Navbar/>
                </div>
                <div>
                    <Route exact path='/prejunior' render={() =>
                        <PreJunior name={state.name}
                                   text={state.text}
                                   time={state.time}
                                   tasks={tasksFiltered}
                                   changeFilter={changeFilter}
                                   removeTask={removeTask}/>
                    }/>

                    <Route exact path='/junior' render={() =>
                        <Junior/>}/>

                    <Route exact path='/junior+' render={() =>
                        <JuniorPlus/>}/>
                </div>
        </HashRouter>
    );
}

export default App;
