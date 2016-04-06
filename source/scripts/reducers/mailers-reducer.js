import { SELECT_MAILER } from '../constants/action-types';

export default function mailers(state = [], action) {
    switch (action.type) {
        case SELECT_MAILER:
            //return [...state, ...action.receivedAuthors];
        default:
            return state;
    }
}