import React from 'react';
import './App.css';
import MessageComponent from "./components/MessageComponent/MessageComponent";


let state = {
    name: 'Aliaksander K.',
    text: "it-incubator",
    time: "20:00"
}


function App() {
    return (
        <div className="App">
            <MessageComponent name={state.name} time={state.time} text={state.text}/>
        </div>
    );
}

export default App;
