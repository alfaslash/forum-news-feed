import React, { PropTypes, Component } from 'react';
import MessagesList from './selectMailer.jsx';

class SendMessage extends Component {
    constructor(props, context) {
        super(props, context);
        Object.assign(this, props, context);
    }

    onSendMessage(e) {
        this.props.sendMessage();
    }

    render() {
        return (
            <button className="send-message" type="submit" onClick={::this.onSendMessage}>Отправить сообщение</button>
        )
    }
}

export default SendMessage;