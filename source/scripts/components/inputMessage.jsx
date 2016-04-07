import React, { PropTypes, Component } from 'react';

class InputMessage extends Component {
    writeMessage(e) {
        this.props.addMessage(e.target.value);
    }

    render() {
        return (
            <textarea className="input-message" placeholder="Введите Ваше сообщение" onBlur={::this.writeMessage}></textarea>
        )
    }
}

export default InputMessage;