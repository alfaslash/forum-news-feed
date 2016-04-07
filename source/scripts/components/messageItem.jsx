import React, { PropTypes, Component } from 'react';

class MessageItem extends Component {
    removePost(e) {
        let index = +e.target.getAttribute('data-index');

        this.props.removeMessage(index);
    }

    render() {
        return (
            <div className="message-item">{ this.props.message }
                {(this.props.id !== 0
                    ? <span className="remove-message" data-index={ this.props.id } title="Удалить сообщение" onClick={::this.removePost}>+</span>
                    : null
                )}
            </div>
        )
    }
}

export default MessageItem;