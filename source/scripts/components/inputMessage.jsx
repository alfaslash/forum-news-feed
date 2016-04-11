import React, { PropTypes, Component } from 'react';

class InputMessage extends Component {
    writeMessage(e) {
        let val = e.target.value.trim();

        if (val.length) {
            this.props.addMessage(e.target.value);
            //e.target.value = '';
        }
    }

    render() {
        return (
            <textarea className="input-message" placeholder="Введите Ваше сообщение" onBlur={::this.writeMessage}></textarea>
        )
    }
}

export default InputMessage;