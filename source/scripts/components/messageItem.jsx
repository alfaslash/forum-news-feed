import React, { PropTypes, Component } from 'react';
import dateFormatting from '../helpers/date-formatting';
import { If, Then, Else } from 'react-if';
import { NO_DATE_PUBLISH } from '../constants/const';

class MessageItem extends Component {
    removePost(e) {
        let index = e.target.getAttribute('data-index');

        this.props.removeMessage(index);
    }

    render() {
        const { id, message, date, mailer} = this.props;
        let _renderDateBlock = () => {
            return (
                <span className="message-publish"> Опубликовано { date ? dateFormatting(date) : NO_DATE_PUBLISH}</span>
            )
        };

        return (
            <div className="message-item">{ message }
                <If condition={ id !== 0 }>
                    <Then>
                        <div className="info">
                            <span className="remove-message" data-index={ id } title="Удалить сообщение"
                                  onClick={ ::this.removePost }>+</span>
                            <div className="message-info">
                                { _renderDateBlock() }
                                <span className="message-author">Автор: { mailer }</span>
                            </div>
                        </div>
                    </Then>
                </If>
            </div>
        )
    }
}

export default MessageItem;

MessageItem.propTypes = {
    message: PropTypes.string.isRequired,
    mailer: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired
};