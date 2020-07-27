import React, { Fragment } from 'react';
import './QuestionResult.css';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const QuestionResult = props => {
    return (
        <div className='answer-container'>
            {
                props.answer === 'Correct' ? 
                <DoneIcon style={{ color: 'green' }} /> :
                <ClearIcon color='secondary'/>
            }
            <h4 className='answer-result'>{props.index + 1}. 
                {props.answer === '' ? 
                ' Incorrect': 
                ' ' + props.answer}
            </h4>
        </div>
    );
}

export default QuestionResult;