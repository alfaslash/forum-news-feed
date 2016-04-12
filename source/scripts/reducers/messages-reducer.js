import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/action-types';

const initialState = JSON.parse(localStorage.getItem('forums')) || [{
        text: 'Сообщений не найдено',
        author: 'Anonymous',
        id: 0
    }];

export default function messages(state = initialState, action) {
    let newState = state.slice(0);

    switch (action.type) {
        case ADD_MESSAGE:
            localStorage.setItem('forums-index', action.id);

            if (state[0] && state[0].id) {
                return state.slice(0).concat([{text: action.receivedMessages, author: action.receivedMailer, id: action.id}]);
            }
            return [].concat([{text: action.receivedMessages, author: action.receivedMailer, id: action.id}]);
        case REMOVE_MESSAGE:
            if (state.length === 1) {
                return [{
                    text: 'Сообщений не найдено',
                    author: 'Anonymous',
                    isSent: true,
                    id: 0
                }];
            }
            return state.filter((obj) => {return obj.id !== action.receivedId});
        default:
            return state;
    }
}