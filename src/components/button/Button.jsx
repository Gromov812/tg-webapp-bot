import React from 'react';
import './button.css'

const Btn = (props) => {
    return (
        <button onClick={props.onButtonClick} className={'button'}>
            {props?.name}
        </button>
    );
};

export default Btn;