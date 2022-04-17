import {SET_FLATS} from "./Flataction";

const initState = {
    flats: []
}

export const Flatreducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FLATS:
            return {
                ...state,
                flats: action.payload
            }
        default:
            return state;
    }
}