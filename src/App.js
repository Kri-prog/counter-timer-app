import React from 'react';
import Counter from './Counter';
import Timer from './Timer';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Counter and timer</h1>
            <Counter />
            <Timer />
        </div>
    );
}

export default App;