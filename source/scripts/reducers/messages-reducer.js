import { ADD_MESSAGE } from '../constants/action-types';

const initialState = {
    message: 'Сообщений не найдено'
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, message: action.receivedMessages};
        default:
            return state;
    }
}