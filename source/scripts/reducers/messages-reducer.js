import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/action-types';

const initialState = [{
        text: 'Сообщений не найдено',
        author: null,
        id: 0
    }];

export default function messages(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            let index = state[state.length - 1].id;

            if (state[0] && state[0].id) {
                return state.slice(0).concat([{text: action.receivedMessages, id: ++index}]);
            }
            return [].concat([{text: action.receivedMessages, id: ++index}]);
        case REMOVE_MESSAGE:
            if (state.length === 1) {
                return initialState;
            }
            return state.filter((obj) => {return obj.id !== action.receivedId});
        default:
            return state;
    }
}