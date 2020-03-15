import React from 'react';
import '../Login.css';

const Input = ({ attribute, handleChange, param }) => {
    return (
        <div className='inputContainer'>
            <input
                id={attribute.name}
                placeholder={attribute.ph}
                name={attribute.name}
                type={attribute.inputType}
                onChange={ (e) => handleChange(e.target.name, e.target.value)}
                className={ param ? 'errorStyle' : 'regularStyle' }
            />
        </div>
    )
};

export default Input;