import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header.jsx';
import InputMessage from '../components/inputMessage.jsx';
import SelectMailer from '../components/selectMailer.jsx';
import MessagesList from '../components/messagesList.jsx';
import * as messagesAction from '../actions/messages-action';
import * as mailerAction from '../actions/mailers-action';

//let _connect = state => ({
//    mailers: state.mailers,
//    message: state.messages
//});
//
//@connect(_connect)
class App extends Component {
    constructor(props, context) {
        super(props, context);
        Object.assign(this, props, context);
    }

    render() {
        const message = this.props.message.messages;
        const mailer = this.props.mailers;
        const { addMessage, removeMessage } = this.props.messagesAction;
        const { selectMailer } = this.props.mailerAction;

        return (
            <div className="messages-container">
                <Header />
                <InputMessage addMessage={ addMessage }/>
                <SelectMailer selectMailer={ selectMailer }/>
                <MessagesList messages={ message } removeMessage={ removeMessage }/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        mailers: state.mailers,
        message: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        messagesAction: bindActionCreators(messagesAction, dispatch),
        mailerAction: bindActionCreators(mailerAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)