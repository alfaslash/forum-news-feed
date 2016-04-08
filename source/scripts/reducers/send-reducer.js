import { SEND_MESSAGE } from '../constants/action-types';

export default function sendMessage(state = false, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return action.isSend;
        default:
            return state;
    }
}