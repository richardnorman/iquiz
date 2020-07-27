import React from 'react';
import Button from '@material-ui/core/Button';
import './SubmitButton.css';

const SubmitButton = props => {
    return (
        <Button onClick={props.handler} className='submit-button' variant='contained' size='large' color='primary'>SUBMIT</Button>
    );
}

export default SubmitButton;