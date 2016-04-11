import { combineReducers } from 'redux';
import messages from './messages-reducer';
//import send from './send-reducer';

const rootReducer = combineReducers({
    messages
});

export default rootReducer;