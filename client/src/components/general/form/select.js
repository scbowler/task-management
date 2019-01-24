import React, { Component } from 'react';

class Select extends Component {
    componentDidMount(){
        this.initSelect();
    }

    initSelect(){
        M.FormSelect.init(this.select);
    }

    componentDidUpdate({input: prevInput, options: prevOptions}){
        const { input, options } = this.props;

        if(prevInput.value.length && !input.value.length || prevOptions.length !== options.length){
            this.initSelect();
        }
    }

    render(){
        const { defaultOption = 'Choose your option', input, meta: {error, touched}, multiple = false, options = [] } = this.props;

        const optionElements = options.map(({text, value}) => <option key={value} value={value}>{text}</option>)

        return (
            <div className="input-field col s12">
                <select ref={e => this.select = e} {...input} multiple={multiple}>
                    <option value="" disabled>{defaultOption}</option>
                    {optionElements}
                </select>
                <p className="red-text text-darken-2"><b>{touched && error}</b></p>
            </div>
        );
    }
}

export default Select;
