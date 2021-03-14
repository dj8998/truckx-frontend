import axios from "axios";
import { useSelector } from "react-redux";
import { dataConstants } from "./connstants"

export const getData = (props) => {
    return async (dispatch) =>{
        try{
            dispatch({type: dataConstants.GET_ALL_DATA_REQUEST});
            const res = await axios.get("https://reqres.in/api/users")
                console.log(res)
            if(res.status=200){
                const data = res.data;
                console.log(data);
                dispatch({
                    type: dataConstants.GET_ALL_DATA_SUCCESS,
                    payload: data,
                });
            }else{
                dispatch({type: dataConstants.GET_ALL_DATA_FAILURE})
            }
        }catch(e){
            console.log(e);
        }
    }
}

export const deleteData = (props) =>{
    return async (dispatch) =>{
        const num = props
        console.log(num);
        try {
            dispatch({type: dataConstants.DELETE_DATA_REQUEST});
            const res = axios.delete(`https://reqres.in/api/users/${props}`);
            if(res.status=204){
                dispatch({type: dataConstants.DELETE_DATA_SUCCESS,
                    payload: num
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
    
}

export const updateinfo = (props) =>{
    
}

export const addUser = (newUser) =>{

    return async (dispatch) =>{
        
            dispatch({type:dataConstants.ADD_NEW_DATA_REQUEST});
            const res = await axios.post('https://reqres.in/api/users', {
                ...newUser
            })
            if(res.status=201){
                const item = res.data;
                console.log(item);
                const updates = {
                    id: item.id,
                    email:item.email,
                    first_name: item.firstName,
                    last_name: item.lastName
                }
                dispatch({type: dataConstants.ADD_NEW_DATA_SUCCESS,
                    payload: {item}
                });
            }else{
                if(res.status === 400){
                    dispatch({
                        type: dataConstants.ADD_NEW_DATA_FAILURE,
                        payload: { error: res.data.error }
                    });
                }}
        } 
    }