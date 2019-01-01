import React from 'react';

export default ({created, author, message}) => {
    return (
        <div className="task-message-container z-depth-2">
            <div className="task-message-content">
                <div className="message">{message}</div>
                <div className="info">{new Date(created).toLocaleString()} BY: {author}</div>
            </div>
        </div>
    )
}
