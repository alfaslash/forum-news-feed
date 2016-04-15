import { ADD_MESSAGE, REMOVE_MESSAGE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS } from '../constants/action-types';

const initialState = {
    messages: [{
        text: 'Сообщений не найдено',
        author: 'Anonymous',
        id: 0
    }],
    isFetching: false
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            localStorage.setItem('forums-index', action.id);

            if (!state.messages[0].id) {
                return {messages: [{text: action.receivedMessages, author: action.receivedMailer, id: action.id}], isFetching: false};
            }
            let messages = [...state.messages, {text: action.receivedMessages, author: action.receivedMailer, id: action.id}];
            return {messages: messages, isFetching: false};
        case REMOVE_MESSAGE:
            if (state.messages.length === 1) {
                return initialState;
            }
            return {messages: state.messages.filter((obj) => {return obj.id !== action.receivedId}), isFetching: false};
        case GET_MESSAGES_REQUEST:
            return {...state, isFetching: true};
        case GET_MESSAGES_SUCCESS:
            return {messages: action.payload, isFetching: false};
        default:
            return state;
    }
}