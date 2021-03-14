import { userContants } from "../actions/connstants"

const initState = {
    error: null,
    message: '',
    loading: false
}

export default (state = initState, action) => {
    switch(action.type){
        case userContants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: false
            }
            break;
        case userContants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: true,
                message: action.payload.message
            }
            break;
        case userContants.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }

    return state;
}