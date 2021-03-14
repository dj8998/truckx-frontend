import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateinfo } from '../actions/data.action';

const EditUser = (event) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const  dispatch = useDispatch();

    const userUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateinfo())
    }

    return(
        <div>
            <form onSubmit={userUpdate} >  
                    <div style={{textAlign:'center'}} >   
                    <label>First Name : </label>   
                        <input type="text" placeholder="Enter First name" name="firstName" value={firstName} onChange={(e) =>{setFirstName( e.target.value)}} required /> 
                        <label>Last Name : </label>   
                        <input type="text" placeholder="Enter Last Name" name="lastName" value={lastName} onChange={(e) =>{setLastName(e.target.value)}}  required /> 
                        <label>Email : </label>   
                        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}  required />  
                        <button type="submit">Login</button>      
                    </div>   
                </form> 
        </div>
    )
}

export default EditUser