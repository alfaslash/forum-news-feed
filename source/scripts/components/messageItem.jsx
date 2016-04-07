import React, { PropTypes, Component } from 'react';

class MessageItem extends Component {

    render() {
        return (
            <div className="message-item">{this.props.message}</div>
        )
    }
}

export default MessageItem;