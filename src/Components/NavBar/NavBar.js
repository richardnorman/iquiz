import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar'
import Timer from '../Timer/Timer';
import './NavBar.css';

const NavBar = props => {

    const DisplayTimer = _ => {
        if(props.quizStarted && !props.quizComplete) {
            return <Timer timerDoneHandler={props.timerDoneHandler} quizStarted={props.quizStarted} quizComplete={props.quizComplete}/>
        } else {
            return null;
        }
    }

    return (
        <AppBar position='fixed'>
            <ToolBar>
                <Typography variant='h4'>
                    iQuiz
                </Typography>
                <DisplayTimer />
            </ToolBar>
        </AppBar>
    );
}

export default NavBar;