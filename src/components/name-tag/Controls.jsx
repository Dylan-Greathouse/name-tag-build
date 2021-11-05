import React from 'react';
import PropTypes from 'prop-types';

export default function Controls ({
    nameInput,
    nameChange,
    onSubmit
}) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='nameInput'>Name Input</label>
            <input 
            id='nameInput'
            name='nameInput'
            type='text'
            value={nameChange}
            onChange={nameChange}
            />
            <button aria-label='name-change'>Here is your Name Tag</button>
        </form>
    );
}
Controls.propTypes = {
    nameInput: PropTypes.string.isRequired,
    nameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};


