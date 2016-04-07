import { ADD_MESSAGE } from '../constants/action-types';

const initialState = [{
        text: 'Сообщений не найдено',
        author: null,
        id: 0
    }];

export default function messages(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            let index = state.length - 1;

            if (state[0].id) {
                return state.slice(0).concat([{text: action.receivedMessages, id: ++index}]);
            }
            return [].concat([{text: action.receivedMessages, id: ++index}]);
        default:
            return state;
    }
}