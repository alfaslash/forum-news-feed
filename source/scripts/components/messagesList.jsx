import React, { PropTypes, Component } from 'react';
import MessageItem from '../components/messageItem.jsx';

class MessagesList extends Component {
    render() {
        const { messages, sentMessage } = this.props;
        let _renderMessageItem = () => {
            return messages.map((item, index) => <MessageItem
                message={ item.text }
                sentMessage={ sentMessage }
                mailer={ item.author }
                isSent={ item.isSent }
                id={ item.id }
                key={ index }
                removeMessage={ this.props.removeMessage } />)
        };

        return (
            <div className="messages-list">
                <div className="post-count">Число сообщений: <strong>{ messages.length }</strong></div>
                { _renderMessageItem() }
            </div>
        )
    }
}

export default MessagesList;