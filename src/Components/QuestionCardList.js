import React from 'react';
import './QuestionCardList.css';
import Card from './QuestionCard';

const QuestionCardList = ({ questions, answers, radioHandler, radioChangeHandler }) => {
    return (
        <div className='card-list'>
            {questions.map((element, i) => {
                return (
                    <Card key={i} cardNumber={i} question={element} questionAnswers={answers[i]} radioChangeHandler={radioChangeHandler}/>
                );
            })}
        </div>
    );
}

export default QuestionCardList;