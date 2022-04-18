export const REGISTER="REGISTER";
export const SET_USER = "SET_USER";

export const setUserToken = (payload) => ({type: SET_USER, payload});
export const registeraction = (data) => {
    return {
        type: REGISTER,
        payload: data
    }
}