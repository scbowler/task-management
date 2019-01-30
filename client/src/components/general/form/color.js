import React from 'react';

export default ({initials, input, col = 's12', label = 'Select a color' }) => (
    <div className={`col ${col} color-picker`}>
        <div className="input-field">
            <input {...input} type="color" id={input.name} />
            <div style={{color: input.value}} className="center">{label}</div>
        </div>
        <div className="center">
            <div style={{backgroundColor: input.value}} className="icon">{initials}</div>
        </div>
    </div>
);
