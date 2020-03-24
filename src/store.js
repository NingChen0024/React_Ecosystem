import { createStore, combineReduxers } from 'redux'

const reducers = {}

const rootReducer = combineReduxers(reducers)

export const configureStore = () => createStore(rootReducer)