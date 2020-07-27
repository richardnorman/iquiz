import React, { Fragment } from 'react';
import './Timer.css';

const Timer = props => {

    let timeLeft = 60;

    if(props.quizStarted) {
        setInterval(() => {
            if (!props.quizComplete) {
                timeLeft -= 1;
                if(timeLeft === 0) {
                    props.timerDoneHandler();
                }
                let timer = document.querySelector('.timer');
                if (timer != null) {
                    timer.innerHTML = `${timeLeft} seconds remaining`;
                }
            }
        }, 1000);
    }

    return (
        <h3 className='timer'>{timeLeft} seconds remaining</h3>
    );
}

export default Timer;