import React, { PropTypes, Component } from 'react';

class InputMessage extends Component {
    render() {
        const {addMessage} = this.props;

        return (
            <textarea className="input-message" placeholder="Введите Ваше сообщение" onchange={e => addMessage(ADD_MESSAGE, e.target.value)}></textarea>
        )
    }
}

export default InputMessage;