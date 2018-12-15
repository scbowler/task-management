import React, { Component } from 'react';

class EditText extends Component {
    constructor(props){
        super(props);

        this.state = {
            editable: false,
            value: props.content
        }
    }

    toggleEditable = editable => this.setState({editable: editable || !this.state.editable});

    render(){
        const { defaultContent, className, content } = this.props;
        const { editable, value } = this.state;

        console.log('Value');

        if(editable){
            return <input className={className} type="text" value={value}/>
        }


        return <p onClick={this.toggleEditable} className={className}>{content || defaultContent || 'Click to edit'}</p>;
    }
}

export default EditText;
