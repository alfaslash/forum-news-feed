import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/action-types'

let messageId = +JSON.parse(localStorage.getItem('forums-index')) || 1;

export function addMessage(message, mailer) {
    return {
        type: ADD_MESSAGE,
        receivedMessages: message,
        receivedMailer: mailer,
        id: messageId++
    }
}

export function removeMessage(id) {
    return {
        type: REMOVE_MESSAGE,
        receivedId: id
    }
}