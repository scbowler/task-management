import React, { Component } from 'react';

class EditText extends Component {
    render(){
        const { className, content } = this.props;

        return <p className={className}>{content}</p>;
    }
}

export default EditText;
