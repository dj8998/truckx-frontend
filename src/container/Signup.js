import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/user.action';
import Layout from '../components/Layout'

const Signup = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    console.log(user)
    const userSignup = (e) => {
        e.preventDefault();
    
        const user = {
          firstName,
          lastName,
          email,
          password,
        };
    
        dispatch(signup(user));
      };

     

    return (
        <Layout>
            <form onSubmit={userSignup}>  
                    <div style={{textAlign:'center'}} >   
                    <label>First Name : </label>   
                        <input type="text" placeholder="Enter First name" name="firstName" value={firstName} onChange={(e) =>{setFirstName( e.target.value)}} required /> 
                        <label>Last Name : </label>   
                        <input type="text" placeholder="Enter Last Name" name="lastName" value={lastName} onChange={(e) =>{setLastName(e.target.value)}}  required /> 
                        <label>Email : </label>   
                        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}  required />  
                        <label>Password : </label>   
                        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) =>{setPassword(e.target.value)}}  required />  
                        <button type="submit">Login</button>      
                    </div>   
                </form> 
        </Layout>
    )
}

export default Signup