import React, { Component } from 'react';

class Input extends Component {

    state = {
        inputValue: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.inputValue === '') return
        this.props.addText(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    }

    handleOnChange = (e) => {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } >
                <input
                    autoFocus
                    type='text'
                    name='whatever'
                    value={this.state.inputValue}
                    onChange={ this.handleOnChange }
                />
                <input
                    type='submit'
                />
            </form>
        )
    }
}

export default Input;