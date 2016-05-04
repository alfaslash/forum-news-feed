import * as type from '../constants/action-types';
import $ from 'jquery';

let messageId = +JSON.parse(localStorage.getItem('forums-index')) || 1;

export function addMessage(message, mailer) {
    return (dispatch) => {
        dispatch({
            type: type.ADD_MESSAGE_REQUEST
        });

        $.ajax({
            url: '/api/messages/',
            type: 'POST',
            data: {
                text: message,
                author: mailer,
                date: new Date()
            },
            success: function(data) {
                dispatch({
                    type: type.ADD_MESSAGE_SUCCESS,
                    payload: data
                })
            }
        });
    };
}

export function removeMessage(id) {
    return (dispatch) => {
        dispatch({
            type: type.REMOVE_MESSAGE_REQUEST
        });

        $.ajax({
            url: `/api/messages/${id}`,
            type: 'DELETE',
            success: function(data) {
                dispatch({
                    type: type.REMOVE_MESSAGE_SUCCESS,
                    payload: data
                })
            }
        });
    }
}

export function getMessages() {
    return (dispatch) => {
        dispatch({
            type: type.GET_MESSAGES_REQUEST
        });

        $.get('/api/messages/', function(data) {
            dispatch({
                type: type.GET_MESSAGES_SUCCESS,
                payload: data
            })
        });
    }
}