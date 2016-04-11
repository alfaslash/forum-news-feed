import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header.jsx';
import InputMessage from '../components/inputMessage.jsx';
import SelectMailer from '../components/selectMailer.jsx';
import MessagesList from '../components/messagesList.jsx';
import * as messagesAction from '../actions/messages-action';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        Object.assign(this, props, context);
    }

    render() {
        const message = this.props.state.messages;
        const { addMessage, removeMessage, selectMailer, sendMessage, sentMessage } = this.props.messagesAction;

        return (
            <div className="messages-container">
                <Header />
                <InputMessage addMessage={ addMessage }/>
                <SelectMailer selectMailer={ selectMailer } sendMessage = { sendMessage }/>
                <MessagesList messages={ message } removeMessage={ removeMessage } sentMessage={ sentMessage }/>
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
        messagesAction: bindActionCreators(messagesAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)