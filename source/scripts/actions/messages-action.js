import { ADD_MESSAGE, REMOVE_MESSAGE, SELECT_MAILER, SEND_MESSAGE } from '../constants/action-types'

let messageId = 1;

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        receivedMessages: message,
        id: messageId++
    }
}

export function removeMessage(id) {
    return {
        type: REMOVE_MESSAGE,
        receivedId: id
    }
}

export function selectMailer(mailer) {
    return {
        type: SELECT_MAILER,
        receivedMailer: mailer
    }
}

export function sendMessage() {
    return {
        type: SEND_MESSAGE,
        isSent:  true
    }
}