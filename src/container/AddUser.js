import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUser } from '../actions/data.action';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const data = useSelector(state => state.data)
    const [update, setUpdate] = useState(data.data);
    

    const AddNewUser = (e) => {
        console.log(data);

        e.preventDefault();
        const newUser = {
             email, 
             firstName, 
             lastName
        }
        dispatch(addUser(newUser));
        history.push('/')
    }

    return (
        <div>
            <form onSubmit={AddNewUser} >
                <div style={{ textAlign: 'center' }} >
                    <label>Email : </label>
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                    <label>First Name : </label>
                    <input type="text" placeholder="Enter First name" name="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} required />
                    <label>Last Name : </label>
                    <input type="text" placeholder="Enter Last Name" name="lastName" value={lastName} onChange={(e) => { setLastName(e.target.value) }} required />

                    <button type="submit" >Login</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser