import { dataConstants } from "../actions/connstants";

const initialState = {
    data: [],
    newUser: []
}; 



const Newarray = (data, val) =>{
    const newValue = data
    const value = {
        id: val.item.id,
        email: val.item.email,
        first_name: val.item.firstName,
        last_name: val.item.lastName
    }
    return newValue.push(value)
}

const DeleteData = (arr, index) =>{
    const dele =  arr
    return dele.filter( item => item.id!==index );
}

export default (state = initialState, action) =>{
    switch(action.type){
        case dataConstants.GET_ALL_DATA_SUCCESS:
            state = {
                ...state,
                data: action.payload.data
            }
            break;
        case dataConstants.DELETE_DATA_SUCCESS:
            console.log(state.data);
            const deteledarray = DeleteData(state.data, action.payload);
            console.log(deteledarray);
            console.log(state.data);
            state = {
                ...state,
                data: state.data
            }
        case dataConstants.ADD_NEW_DATA_SUCCESS:
            const updatedarray = Newarray(state.data, action.payload) ; 
            state = {
                ...state,
                data: state.data,
                newUser: action.payload.item,
            }
    }
    return state;
}

