import React from 'react';

export default props => (
    <ul ref={e => props.setRef(e)} className="sidenav grey" id="side-nav">
        {props.renderLinks()}
    </ul>
);
