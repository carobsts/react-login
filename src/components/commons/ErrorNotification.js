import React from 'react';

const ErrorNotification = ({ text }) => {
    return (
        <div className='errorNotificationContainer'>
            <label className='errorNotificationLabel'> {text} </label>
        </div>
    )
};

export default ErrorNotification; 