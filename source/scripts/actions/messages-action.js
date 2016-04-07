import { ADD_MESSAGE } from '../constants/action-types'

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        receivedMessages: message
    }
}