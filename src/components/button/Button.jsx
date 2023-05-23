import React from 'react';
import './button.css'

const Button = (props) => {
    return (
        <button onClick={props.onButtonClick} className={'button'}>
            {props?.name}
        </button>
    );
};

export default Button;