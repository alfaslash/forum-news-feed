import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header.jsx';
import InputMessage from '../components/inputMessage.jsx';
import SelectMailer from '../components/selectMailer.jsx';
import MessagesList from '../components/messagesList.jsx';
import * as messagesAction from '../actions/messages-action';
import * as sendAction from '../actions/send-action';

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
        const message = this.props.state.messages;
        const isSend = this.props.state.send;
        const { addMessage, removeMessage, selectMailer, sendMessage } = this.props.messagesAction;

        return (
            <div className="messages-container">
                <Header />
                <InputMessage addMessage={ addMessage }/>
                <SelectMailer selectMailer={ selectMailer } sendMessage = { sendMessage }/>
                <MessagesList messages={ message } removeMessage={ removeMessage } isSend={ isSend }/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        messagesAction: bindActionCreators({...messagesAction, ...sendAction}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)