import {colors} from "../reducers/colors";
import {createStore, applyMiddleware} from "redux";

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('previous state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
}

const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-storage'] = JSON.stringify(store.getState());
    return result;
}

const storeFactory = (initialState = []) =>
    applyMiddleware(logger, saver)(createStore)(
        colors,
        (localStorage['redux-storage']) ?
            JSON.parse(localStorage['redux-storage']) :
            initialState
    )

export default storeFactory;