import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header.jsx';
import MainForm from '../components/mainForm.jsx';
import MessagesList from '../components/messagesList.jsx';
import * as messagesAction from '../actions/messages-action';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        Object.assign(this, props, context);
    }

    resetMessage() {
        let inputMessage = document.querySelector('.input-message');
        inputMessage.value = '';
    }

    componentDidMount() {
        this.props.messagesAction.getMessages();
    }

    render() {
        const { messages:message, isFetching } = this.props;
        const { addMessage, removeMessage } = this.props.messagesAction;

        return (
            <div className="messages-container">
                <Header />
                <MainForm addMessage={ addMessage }/>
                <MessagesList messages={ message } isFetching={ isFetching } removeMessage={ removeMessage }/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.get('messages').get('messages').toArray(),
        isFetching: state.get('messages').get('isFetching')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        messagesAction: bindActionCreators(messagesAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)