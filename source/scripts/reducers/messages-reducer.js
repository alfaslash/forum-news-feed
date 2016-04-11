import { ADD_MESSAGE, REMOVE_MESSAGE, SELECT_MAILER, SEND_MESSAGE } from '../constants/action-types';

const initialState = [{
        text: 'Сообщений не найдено',
        author: 'Anonymous',
        isSent: true,
        id: 0
    }];

export default function messages(state = initialState, action) {
    let newState = state.slice(0);

    switch (action.type) {
        case ADD_MESSAGE:
            if (state[0] && state[0].id) {
                return state.slice(0).concat([{text: action.receivedMessages, author: 'Anonymous', id: action.id}]);
            }
            return [].concat([{text: action.receivedMessages, author: 'Anonymous', id: action.id}]);
        case REMOVE_MESSAGE:
            if (state.length === 1) {
                return initialState;
            }
            return state.filter((obj) => {return obj.id !== action.receivedId});
        case SELECT_MAILER:
            if (!newState[newState.length - 1].author || newState[newState.length - 1].author === 'Anonymous') {
                newState[newState.length - 1].author = action.receivedMailer;
            }
            return newState;
        case SEND_MESSAGE:
            newState[newState.length - 1].isSent = action.isSent;
            return newState;
        default:
            return state;
    }
}