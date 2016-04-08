import React, { PropTypes, Component } from 'react';

class SendMessage extends Component {
    constructor(props, context) {
        super(props, context);
        Object.assign(this, props, context);
    }

    render() {
        return (
            <button className="send-message" type="submit" onClick={::this.onSendMessageClick}>Отправить сообщение</button>
        )
    }
}

export default SendMessage;