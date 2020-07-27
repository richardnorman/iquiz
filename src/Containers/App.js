import React, { Fragment } from 'react';
import './App.css';
import NavBar from '../Components/NavBar/NavBar';
import QuestionCardList from '../Components/QuestionCardList/QuestionCardList';
import StartMenu from '../Components/StartMenu/StartMenu.js'
import SubmitButton from '../Components/SubmitButton/SubmitButton';
import ResultsMenu from '../Components/ResultsMenu/ResultsMenu';

const questionsArray = [
  'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
  'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
  'In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?'
];

const answersArray = [
  ['$1.00', '$1.10', '*$1.05', '$0.10'],
  ['60 minutes', '100 minutes', '20 minutes', '*5 minutes'],
  ['24 days', '*47 days', '2 days', '12 days']
];

let userAnswersArray = ['','',''];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      quizStarted: false,
      quizComplete: false,
      correctAnswers: 0
    }
  }

  quizStartHandler = () => {
    this.setState({ quizStarted: true });
  }
  
  submitClickedHandler = () => {
    let numberOfCorrectAnswers = 0;
    //if blank element found in array, user did not answer a question
    userAnswersArray.forEach(answer => {
      //if answer is correct, increment
      if (answer === 'Correct') 
      numberOfCorrectAnswers++;
    })
    this.setState({ 
      correctAnswers: numberOfCorrectAnswers,
      quizComplete: true
    })
  }
  
  radioChangeHandler = (event) => {
    let cardID = event.target.value[0];
    userAnswersArray[cardID] = event.target.value.substring(1, event.target.value.length - 1);
  }
  
  render() {
    return (
      <div className='container'>
        <NavBar timerDoneHandler={this.submitClickedHandler} quizStarted={this.state.quizStarted} quizComplete={this.state.quizComplete}/>
        {this.state.quizComplete ?
          <ResultsMenu correctAnswers={this.state.correctAnswers} userAnswersArray={userAnswersArray} /> :
          <Fragment>
            {this.state.quizStarted ? 
              <div>
                <QuestionCardList questions={questionsArray} answers={answersArray} radioChangeHandler={this.radioChangeHandler}/> 
                <SubmitButton handler={this.submitClickedHandler}/> 
              </div> :
              <StartMenu handler={this.quizStartHandler}/>
            }
          </Fragment>
        }
      </div>
    );
  }
}

export default App;
