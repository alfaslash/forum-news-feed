import * as types from '../constants/action-types'

export function selectMailer(text) {
    return {
        type: types.SELECT_MAILER,
        text
    }
}

export function sendMessage() {
    console.log(321);
}