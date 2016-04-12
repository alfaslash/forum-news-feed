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
        let messageMailer = ReactDOM.findDOMNode(this.refs.selectMailer).options[ ReactDOM.findDOMNode(this.refs.selectMailer).selectedIndex ].text;

        if (messageText.trim() === '') {
            return;
        }
        this.props.addMessage(messageText, messageMailer);
    }

    render() {
        return (
            <div className="main-form">
                <textarea
                    className="input-message"
                    defaultValue=""
                    ref="inputMessage"
                    placeholder="Введите Ваше сообщение">
                </textarea>
                <div className="mailer">
                    <p>Выберите одно из предложенных имен:</p>
                    <select className="select-mailer" ref="selectMailer">
                        {mailersList}
                    </select>
                    <button className="send-message" type="submit" onClick={ ::this.onSendMessage }>Отправить сообщение</button>
                </div>
            </div>
        )
    }
}

export default MainForm;