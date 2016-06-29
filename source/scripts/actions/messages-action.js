import * as type from '../constants/action-types';
import { Map, List } from 'immutable';
import $ from 'jquery';

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
            success: function (request) {
                dispatch({
                    type: type.ADD_MESSAGE_SUCCESS,
                    payload: Map(request)
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
            success: function (request) {
                dispatch({
                    type: type.REMOVE_MESSAGE_SUCCESS,
                    payload: request
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

        $.get('/api/messages/', function (request) {
            dispatch({
                type: type.GET_MESSAGES_SUCCESS,
                payload: List(request)
            })
        });
    }
}