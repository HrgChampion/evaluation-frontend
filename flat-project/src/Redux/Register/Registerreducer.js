import {REGISTER} from './Registeraction';
import {SET_USER} from './Registeraction';
const initState = {
    Register:{},
    user_token: ""
}

export const RegisterReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                Register: action.payload
            }
        case SET_USER:
            return {...store, user_token: payload};
        default:
            return state;
    }
}