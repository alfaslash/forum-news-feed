import React, { PropTypes, Component } from 'react';
import MessageItem from '../components/messageItem.jsx';

class MessagesList extends Component {
    render() {
        const { messages, removeMessage } = this.props;
        let _renderMessageItem = () => {
            return messages.map((item, index) => <MessageItem
                message={ item.text }
                mailer={ item.author }
                id={ item.id }
                key={ index }
                removeMessage={ removeMessage } />)
        };

        return (
            <div className="messages-list">
                <div className="post-count">Число сообщений: <strong>{ messages[0].id ? messages.length : '0' }</strong></div>
                { _renderMessageItem() }
            </div>
        )
    }
}

export default MessagesList;