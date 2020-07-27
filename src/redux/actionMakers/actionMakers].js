import {constants as C} from "../constants";
import {v4} from "uuid";

export const addColor = (title, color) => {
    return {
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color
    }
};

export const removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        id
    })

export const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })
