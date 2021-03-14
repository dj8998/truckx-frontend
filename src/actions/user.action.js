import axios from "axios";
import { userContants } from "./connstants";

export const signup = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({ type: userContants.USER_REGISTER_REQUEST });
        const res = await axios.post('http://localhost:2000/api/signup', {
            ...user
        });

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: userContants.USER_REGISTER_SUCCESS,
                payload: {message, user}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: userContants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}