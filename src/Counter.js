import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
            increment();
        } else if (event.key === 'ArrowDown') {
            decrement();
        }
    };

    return (
        <div className="counter" tabIndex="0" onKeyDown={handleKeyDown}>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    );
};

export default Counter;