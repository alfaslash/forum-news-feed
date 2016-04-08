//@deprecated
import { SELECT_MAILER } from '../constants/action-types';

//const initialState = {
//    mailer: 'Anonymous'
//};

const initialState = ['Anonymous'];

export default function mailers(state = [], action) {
    switch (action.type) {
        case SELECT_MAILER:

            return state.slice(0).concat([action.receivedMailer]);

            //console.log('receivedMailer: ' + action.receivedMailer);
            //if (state[0] && state[0].id) {
            //    return state.slice(0)[state.length - 1].author =  action.receivedMailer;
            //}
            //return [].concat([{author: action.receivedMailer, id: ++index}]);

            //return {...state, mailer: action.receivedMailer};
        default:
            return state;
    }
}