import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/action-types'

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        receivedMessages: message
    }
}

export function removeMessage(id) {
    return {
        type: REMOVE_MESSAGE,
        receivedId: id
    }
}