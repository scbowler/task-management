import React from 'react';
import { enhanceText } from '../../../helpers';

export default ({created, author, message}) => {
    return (
        <div className="task-message-container z-depth-2">
            <div className="task-message-content">
                <div className="message" dangerouslySetInnerHTML={{__html: enhanceText(message, {removeScripts: false})}}/>
                <div className="info">{new Date(created).toLocaleString()} BY: {author}</div>
            </div>
        </div>
    );
}
