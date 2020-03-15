import React from 'react';

const ModalError = ({ title, text, handleOnClick }) => {
    return (
        <div className='modalErrorContainer' onClick={handleOnClick} >
            <h3 className='modalErrorTitle'> {title} </h3>
            <label className='modalErrorText'> {text} </label>
        </div>   
    )
};

export default ModalError;