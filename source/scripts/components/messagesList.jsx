import React, { PropTypes, Component } from 'react';
import MessageItem from '../components/messageItem.jsx';

class MessagesList extends Component {
    render() {
        let messages = this.props.messages;
        let _renderContentBlock = () => {
            return messages.map((item, index) => <MessageItem message={ item.text } mailer={ item.author } id={ item.id } key={ index } removeMessage={ this.props.removeMessage }/>)
        };

        return (
            <div className="messages-list">
                {_renderContentBlock()}
            </div>
        )
    }
}

export default MessagesList;