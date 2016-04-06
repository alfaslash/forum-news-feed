import { ADD_MESSAGE, SELECT_MAILER, LOAD_MESSAGES, REQUEST_MESSAGES } from '../constants/action-types'

export function addMessage(text) {
    return {
        type: types.ADD_MESSAGE,
        text
    }
}

//function requestMessages() {
//    return {
//        type: REQUEST_MESSAGES
//    };
//}
//
//export function fetchMessages(action, pageNumber = 1) {
//    return (dispatch, getState) => {
//        dispatch(requestMessages());
//
//        if (typeof(Storage) !== "undefined") {
//            // Code for localStorage/sessionStorage.
//        }
//
//        interaction.send('/events', {...getRequestOptions(getState()), pageNumber}, {}, dispatch).done(req => {
//            dispatch({type: action, recievedEvents: req.Data, total: req.Count});
//        });
//    };
//}
//
//export function loadMessages() {
//    return dispatch => dispatch(fetchMessages(LOAD_MESSAGES));
//}