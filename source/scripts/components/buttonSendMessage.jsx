import React, { PropTypes, Component } from 'react';
import { SEND_MESSAGE } from '../constants/action-types';
import { sendMessage } from '../actions/mailers-action';

class SelectMailer extends Component {
    constructor(props, context) {
        super(props, context);
        Object.assign(this, props, context);
    }

    render() {
        const {clickSendMessage} = this.props;

        return (
            <button className="send-message" type="submit" onClick={this.clickSendMessage}>Отправить сообщение</button>
        )
    }
}

export default SelectMailer;