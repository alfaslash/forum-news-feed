import * as type from '../constants/action-types';
import { Map, List } from 'immutable';

const _initialState = Map({
    messages: List([{
        text: 'Сообщений не найдено',
        author: 'Anonymous',
        _id: 0
    }]),
    isFetching: false
});

export default function messages(state = _initialState, action) {
    switch (action.type) {
        case type.ADD_MESSAGE_REQUEST:
            return state.set('isFetching', true);

        case type.ADD_MESSAGE_SUCCESS:
        {
            const request = action.payload;
            const message = state.get('messages');
            const newMessage = List([{
                text: request.get('text'),
                author: request.get('author'),
                date: request.get('date'),
                _id: request.get('_id')
            }]);

            if (!state.get('messages').first()._id) {
                return Map({messages: newMessage, isFetching: false});
            }
            return state.set('messages', message.concat(newMessage)).set('isFetching', false);
        }

        case type.REMOVE_MESSAGE_REQUEST:
            return state.set('isFetching', true);

        case type.REMOVE_MESSAGE_SUCCESS:
        {
            const messages = state.get('messages');

            if (messages.size === 1) {
                return _initialState;
            }
            const newMessage = messages.filter((obj) => obj._id !== action.payload);
            return state.set('messages', newMessage).set('isFetching', false);
        }

        case type.GET_MESSAGES_REQUEST:
            return state.set('isFetching', true);

        case type.GET_MESSAGES_SUCCESS:
            return state.set('messages', action.payload).set('isFetching', false);

        default:
            return state;
    }
}
