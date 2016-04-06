import { ADD_MESSAGE } from '../constants/action-types';

export default function messages(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            //return [...state, ...action.receivedMessages];
        default:
            return state;
    }
}