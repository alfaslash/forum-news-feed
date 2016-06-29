import { combineReducers } from 'redux-immutable';
import messages from './messages-reducer';

const rootReducer = combineReducers({
    messages
});

export default rootReducer;