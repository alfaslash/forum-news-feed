import React, { PropTypes, Component } from 'react';
import MessageItem from '../components/messageItem.jsx';

class MessagesList extends Component {
    render() {
        let messages = this.props.messages;
        let _renderContentBlock = () => {
            return messages.map((item, index) => <MessageItem message={ item.text } key={ index }/>)
        };

        return (
            <div className="messages-list">
                {_renderContentBlock()}
            </div>
        )
    }
}

export default MessagesList;