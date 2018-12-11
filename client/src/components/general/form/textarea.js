import React, { Component } from 'react';

class Textarea extends Component {
    render() {
        const { className, col, errorAlign, errorHeight, input, label, meta: { error, touched }, noError } = this.props;

        return (
            <div className={`input-field col ${col || 's12'} ${className}`}>
                <textarea {...input} ref={e => this.ref = e} className="materialize-textarea"></textarea>
                <label>{label}</label>
                {
                    noError
                        ? null
                        : <p style={{ minHeight: errorHeight || 22 }} className={`${errorAlign || 'center'}-align red-text`}>{touched && error}</p>
                }
            </div>
        )
    }
}

export default Textarea;
