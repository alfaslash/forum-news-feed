import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header.jsx';
import InputMessage from '../components/inputMessage.jsx';
import SelectMailer from '../components/selectMailer.jsx';
import MessagesList from '../components/messagesList.jsx';
import * as messagesAction from '../actions/messages-action';

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
        const { addMessage, removeMessage, selectMailer } = this.props.messagesAction;

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
        message: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        messagesAction: bindActionCreators(messagesAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)