import React, { PropTypes, Component } from 'react';
import { mailers } from '../constants/mailers';
import ReactDOM from 'react-dom';

let mailersList = mailers.map(function(mailer, index) {
    return <option value={ mailer } key={ index }>{ mailer }</option>;
});

class MainForm extends Component {
    constructor(props, context) {
        super(props, context);
        Object.assign(this, props, context);
    }

    onSendMessage() {
        let messageText = ReactDOM.findDOMNode(this.refs.inputMessage).value;
        let messageMailer = ReactDOM.findDOMNode(this.refs.mailerName).value || 'Anonymous';

        if (messageText.trim() === '') {
            ReactDOM.findDOMNode(this.refs.inputMessage).className += ' error';
            return;
        }
        this.props.addMessage(messageText, messageMailer);
    }

    writingMsg(e) {
        let elem = e.target;

        elem.className = elem.className.replace(' error', '');
    }

    render() {
        return (
            <div className="main-form">
                <textarea
                    className="input-message"
                    ref="inputMessage"
                    placeholder="Введите Ваше сообщение"
                    onChange={ ::this.writingMsg }>
                </textarea>
                <div className="mailer">
                    <p>Представьтесь:</p>
                    <input placeholder="Ваше имя" type="text" className="mailer-name" ref="mailerName" />
                    <button className="send-message" type="submit" onClick={ ::this.onSendMessage }>Отправить сообщение</button>
                </div>
            </div>
        )
    }
}

export default MainForm;