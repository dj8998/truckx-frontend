import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { isUserLoggedIn, signout } from '../actions'
import { deleteData, getData } from '../actions/data.action';


const Dashboard = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const auth = useSelector(state => state.auth);
    const [dataset, setDataset] = useState((data))
    console.log(data)
    const userDelete = (props) =>{
        dispatch(deleteData(props));
    }

    const logout = () => {
        dispatch(signout())
    }

    useEffect(() => {
        if(!auth.authenticate){
            dispatch(getData())
            dispatch(isUserLoggedIn());
        }
    }, []);

    const updateinfom = (id) =>{
        console.log(id);
        return <Redirect to = {{
            pathname: '/edituser',
            state: {id: id}
        }} />
    }


    return (
        <div style={{display:'flex', flexDirection:'column'}} >
        <div style={{backgroundColor:'grey'}} >
            <form onSubmit={logout}>
            <button style={{float:'right', marginRight:'20px', textDecoration:'none'}}  > Sign out</button>
            </form>
                
        </div>
        <div>
        <NavLink style={{float:'right', margin:'10px', color:'black'}} to={'/adduser'} > Add User </NavLink>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                data.data.map((item) =>(
                    <tr key={item.id} >
                         <td>{ item.id}</td>
                         <td>{ item.email}</td> 
                         <td>{ item.first_name}</td>
                         <td>{ item.last_name}</td>
                         <td>   <button style={{textDecoration:'none'}} onClick={()=>{updateinfom(item.id)}} >edit  </button>
                                <button onClick={()=>{userDelete(item.id)}} >delete</button>  
                        </td>
                    </tr>
                    
                    
                   
                ))
            }
        </tbody>
        </table>
        </div>
        </div>
    )
}

export default Dashboard;