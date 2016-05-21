import * as type from '../constants/action-types';

const _initialState = {
    messages: [{
        text: 'Сообщений не найдено',
        author: 'Anonymous',
        _id: 0
    }],
    isFetching: false
};

export default function messages(state = _initialState, action) {
    switch (action.type) {
        case type.ADD_MESSAGE_REQUEST:
            return {...state, isFetching: true};
        case type.ADD_MESSAGE_SUCCESS:
            if (!state.messages[0]._id) {
                return { messages: [{
                            text: action.payload.text,
                            author: action.payload.author,
                            date: action.payload.date,
                            _id: action.payload._id}
                        ],
                        isFetching: false };
            }
            let messages = [...state.messages, {
                text: action.payload.text,
                author: action.payload.author,
                date: action.payload.date,
                _id: action.payload._id
            }];
            return {messages: messages, isFetching: false};
        case type.REMOVE_MESSAGE_REQUEST:
            return {...state, isFetching: true};
        case type.REMOVE_MESSAGE_SUCCESS:
            if (state.messages.length === 1) {
                return initialState;
            }
            console.log(action.payload);
            let message = state.messages.filter((obj) => {return obj._id !== action.payload});
            return {messages: message, isFetching: false};
        case type.GET_MESSAGES_REQUEST:
            return {...state, isFetching: true};
        case type.GET_MESSAGES_SUCCESS:
            return {messages: action.payload, isFetching: false};
        default:
            return state;
    }
}