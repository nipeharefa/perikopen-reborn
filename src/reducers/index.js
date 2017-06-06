import { combineReducers } from 'redux'


import count from './count';
import perikopen from './perikopen';

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        perikopen
    })
}