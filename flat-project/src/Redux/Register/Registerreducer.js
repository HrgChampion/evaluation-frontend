import {REGISTER} from './Registeraction';

const initState = {
    Register:{}
}

export const RegisterReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                Register: action.payload
            }
        default:
            return state;
    }
}