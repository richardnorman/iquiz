import React from 'react';
import './ResultsMenu.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import QuestionResult from './QuestionResult';
import Button from '@material-ui/core/Button';

const ResultsMenu = props => {

    const refreshPage = _ => {
        window.location.reload(true);
    }

    return (
        <div className='results-menu'>
            <h1 className='results-title'>You scored {Math.round((props.correctAnswers/3)*100) + '%'}</h1>
            <LinearProgress className='linear-results' variant='determinate' value={(props.correctAnswers/3)*100}/>
            <div className='results-user-answers'>
                {props.userAnswersArray.map((answer, i) => {
                    return <QuestionResult key={i} index={i} answer={answer} />
                })}
            </div>
            <Button
            className='take-again-button' 
            size='large' 
            variant="outlined" 
            color="primary"
            onClick={refreshPage}>
                TAKE AGAIN
            </Button>   
        </div>
    );
}

export default ResultsMenu;