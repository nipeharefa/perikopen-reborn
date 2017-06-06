import { createStore } from 'redux'
import getRootReducer from './reducers'


// middleware that logs actions

export default function getStore(navReducer) {
    return store = createStore(getRootReducer(navReducer))
}