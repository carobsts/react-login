import React, { useState} from 'react';
import Modal from '../commons/RegularModal';
import { Redirect } from 'react-router-dom';

const NavigationBar = ({ text }) => {

    const [ logout, setLogout ] = useState(false);

    function logOut() {
        localStorage.removeItem('account')
        setTimeout(() => setLogout(true), 1000)
    }

    return (
        <>
            { logout && <Redirect to='/'/> }
            <div className='NavigationBarContainer'>
                <div className='sectionMenu'>
                    <label className='NavigationBarLabel'> {text} </label>
                </div>
                <Modal action={logOut} />
            </div>
        </>
    )
};

export default NavigationBar;