import React, { PropTypes, Component } from 'react';
import { If, Then, Else } from 'react-if';

class MessageItem extends Component {
    removePost(e) {
        let index = +e.target.getAttribute('data-index');

        this.props.removeMessage(index);
    }

    render() {
        const { id, message, mailer } = this.props;

        return (
            <div className="message-item">{ message }
                <If condition={ this.props.id !== 0 }>
                    <Then><div className="message-info">
                        <span className="remove-message" data-index={ id } title="Удалить сообщение" onClick={::this.removePost}>+</span>
                        <div className="message-author">{ mailer }</div>
                    </div></Then>
                </If>
            </div>
        )
    }
}

export default MessageItem;

MessageItem.propTypes = {
    message: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};