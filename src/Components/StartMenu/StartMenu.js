import React from 'react';
import './StartMenu.css';
import Button from '@material-ui/core/Button'

const StartMenu = props => {
    return (
        <div className='start-menu'>
            <h1 className='start-title'>Ready to take the quiz?</h1>
            <p className='start-description'>This quiz is a timed <strong>three</strong> minute, <strong>three</strong> question test of cognitive ability. It was found that only 17% of university students get all three questions correct.</p>
            <Button 
            className='start-button' 
            size='large' 
            variant="outlined" 
            color="primary"
            onClick={props.handler}>
                START
            </Button>        
        </div>
    );
}

export default StartMenu;