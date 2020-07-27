import {constants as C} from "../constants";
import {color} from "./color";

export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ];
        case C.RATE_COLOR:
            return state.map(
                value => color(value, action)
            );
        case C.REMOVE_COLOR:
            return state.filter(
                value => value.id !== action.id
            );
        default:
            return state;
    }
}