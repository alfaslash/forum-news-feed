import { SEND_MESSAGE } from '../constants/action-types'

export function sendMessage() {
    return {
        type: SEND_MESSAGE,
        isSend:  true
    }
}