import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [interval, setIntervalValue] = useState(1);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setInterval(() => {
                setSeconds(prev => prev + interval);
            }, interval * 1000);
        }
        return () => clearInterval(timer);
    }, [isActive, interval]);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setIntervalValue(value);
        }
    };

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    return (
        <div className ="timer">
            <h2> Timer: {seconds} seconds </h2>
            <input type="number" onChange={handleInputChange} min = "1" placeholder = "Enter the number of seconds:" />
            <button onClick={toggleTimer}>{isActive ? 'Stop' : 'Launch'}</button>
        </div>
    );
};

export default Timer;