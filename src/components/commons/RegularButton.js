import React from 'react';
import './../pages/Login/Login.css';

const RegularButton = ({ handleOnClick, text, param }) => {
    return (
        <div className='regularButtonLoginContainer'>
            <button
            onClick={ (e) => handleOnClick(e) }
            disabled={ param ? false : true }
            className={ param ? 'regularButtonLogin' : 'regularButtonLoginDisabled' }
            >
                { text }
            </button>
        </div>
    )
};

export default RegularButton;