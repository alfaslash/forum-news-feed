import { combineReducers } from 'redux';
import mailers from './mailers-reducer';
import messages from './messages-reducer';

const rootReducer = combineReducers({
    messages, mailers
});

export default rootReducer;