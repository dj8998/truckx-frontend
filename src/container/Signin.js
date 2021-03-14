import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import {isUserLoggedIn, login } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getData } from '../actions/data.action';

const Signin = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const auth = useSelector(state => state.auth)                                                                                                                               

   
    const userLogin = (e) =>{

        e.preventDefault();
        const user= {
            email, password
        }
        dispatch(login(user));
    }
    if(auth.authenticate){
        dispatch(getData())
        return <Redirect to={'/' } />
    }

    return (

            <Layout>
                <form onSubmit={userLogin} >  
                    <div style={{textAlign:'center'}}>   
                        <label>Email : </label>   
                        <input type="text" placeholder="Enter Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />  
                        <label>Password : </label>   
                        <input type="password" placeholder="Enter Password" name="password" value={password} required  onChange={(e) =>setPassword(e.target.value)} />  
                        <button type="submit">Login</button>      
                    </div>   
                </form>     
            </Layout>
    )
}

export default Signin