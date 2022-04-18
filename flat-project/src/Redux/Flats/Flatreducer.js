import {SET_FLATS} from "./Flataction";

const initState = {
    flat: []
}

export const Flatreducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FLATS:
            return {
                ...state,
                flat: action.payload
            }
        default:
            return state;
    }
}