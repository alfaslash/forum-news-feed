import React, { PropTypes, Component } from 'react';
import { SEND_MESSAGE } from '../constants/action-types';
import { sendMessage } from '../actions/mailers-action';

class SendMessage extends Component {
    constructor(props, context) {
        super(props, context);
        Object.assign(this, props, context);
    }

    onSendMessageClick(e) {
        this.props.addMessage(+e.target.textContent);
    }

    render() {
        return (
            <button className="send-message" type="submit" onClick={::this.onSendMessageClick}>Отправить сообщение</button>
        )
    }
}

export default SendMessage;