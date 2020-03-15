import React from 'react';

const Item = ({ text }) => {
    return (
        <div className='ItemComponent'>
            <label className='LabelItemComponent'>
                { text }
            </label>
        </div>
    )
};

export default Item;