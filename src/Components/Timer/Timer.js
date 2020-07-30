import React, { Fragment, useState, useEffect } from 'react';
import './Timer.css';

const Timer = props => {
    const [timer, setTimer] = useState(180);

    useEffect(() => {
        const interval = setInterval(() => {
            if (props.quizStarted && !props.quizComplete) {
                console.log(timer);
                setTimer(timer - 1);
                if (timer === 0) {
                    props.timerDoneHandler();
                }
            }
        }, 1000);
        return () => clearTimeout(interval);
    })

    return (
        <h3 className='timer'>{timer} seconds remaining</h3>
    );
}

export default Timer;