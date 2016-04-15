import { ADD_MESSAGE, REMOVE_MESSAGE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS } from '../constants/action-types';
import $ from 'jquery';

let messageId = +JSON.parse(localStorage.getItem('forums-index')) || 1;

export function addMessage(message, mailer) {
    return {
        type: ADD_MESSAGE,
        receivedMessages: message,
        receivedMailer: mailer,
        id: ++messageId
    }
}

export function removeMessage(id) {
    return {
        type: REMOVE_MESSAGE,
        receivedId: id
    }
}

export function getMessages() {
    return (dispatch) => {
        dispatch({
            type: GET_MESSAGES_REQUEST
        });

        $.get('/api/messages/', function(data) {
            dispatch({
                type: GET_MESSAGES_SUCCESS,
                payload: data
            })
        });
    }
}