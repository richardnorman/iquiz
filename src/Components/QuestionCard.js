import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import './QuestionCard.css';

const QuestionCard = props => {
    const BlueRadio = withStyles({
        root: {
          color: '#default',
          '&$checked': {
            color: '#3f51b5',
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);

    // const setAnswer = (event) => {
    //     props.userAnswers[props.key] = event.target.value;
    //     alert(props.userAnswers)
    // }

    return (
        <Card className='question-card'>
            <CardContent>
                <Typography>
                    {props.question}
                </Typography>
                <RadioGroup onChange={props.radioChangeHandler}>
                    {props.questionAnswers.map((answer, i) => {
                        return (
                            <FormControlLabel 
                            key={'answer' + i} 
                            value={ props.cardNumber + ((answer[0] === '*') ? 'Correct' : 'Incorrect') + i } 
                            control={<BlueRadio />} 
                            label={answer.replace('*','')} 
                            />
                        );
                    })}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}

export default QuestionCard;