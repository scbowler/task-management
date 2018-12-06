import React, { Component } from 'react';
import './form.scss';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: ''
        };
    }

    componentDidMount() {
        if (this.props.input.value) {
            this.setState({ className: 'active' });
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.state.className && !prevProps.input.value && this.props.input.value) {
            this.setState({ className: 'active' });
        }
    }

    handleFocus() {
        const { onFocus } = this.props.input;

        this.setState({ className: 'active' });

        onFocus.apply(this, arguments);
    }

    handleBlur() {
        const { value, onBlur } = this.props.input;

        if (value === '') this.setState({ className: '' });

        onBlur.apply(this, arguments);
    }

    labelClick = () => {
        this.setState({ className: 'active' });
        this.input.focus();
    }

    getRef = e => {
        const { getRef } = this.props;

        if (typeof getRef === 'function') {
            getRef(e);
        }

        this.input = e;
    }

    render() {
        const { center, col, height, input, label, type, className, disabled, autoComplete, preText, postText, inputClass, errorAlign, errorHeight, meta: { error, touched } } = this.props;
        const style = {
            height: height || null,
            textAlign: center ? 'center' : 'initial'
        };

        return (
            <div className={`col ${col || 's12'}`}>
                <span>{preText || ''}</span>
                <div className={`input-field ${className || ''} ${preText || postText ? 'inline' : ''}`}>
                    <input
                        {...input}
                        type={type || 'text'}
                        style={style}
                        disabled={disabled}
                        ref={this.getRef}
                        className={inputClass || ''}
                        autoComplete={autoComplete || 'off'}
                        onFocus={this.handleFocus.bind(this)}
                        onBlur={this.handleBlur.bind(this)} />
                    <label onClick={this.labelClick} className={this.state.className}>{label}</label>
                </div>
                <span>{postText || ''}</span>
                <p style={{ minHeight: errorHeight || 22 }} className={`${errorAlign || 'center'}-align orange-text text-darken-3`}>{touched && error}</p>
            </div>
        )
    }
}


export default Input;
