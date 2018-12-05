import React from 'react';

export default ({children, type = 'submit', color = 'yellow darken-3', onClick = ()=>{} }) => (
    <button className={`btn waves-effect waves-light ${color}`} onClick={onClick} type={type}>{children}</button>
);
