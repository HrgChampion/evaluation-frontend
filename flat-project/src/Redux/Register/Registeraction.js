export const REGISTER="REGISTER";

export const registeraction = (data) => {
    return {
        type: REGISTER,
        payload: data
    }
}