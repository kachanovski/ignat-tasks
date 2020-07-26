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
            <div className="App">
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
            </div>
        </HashRouter>
    );
}

export default App;
