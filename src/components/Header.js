import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div style={{height:'50px', backgroundColor:'grey', color:'white'}}>
                <ul style={{listStyle:'none', float: 'right', margin:'auto', display:'flex', padding:'10px'}} >
                    <NavLink to='/signin' style={{textDecoration:'none', color:'white'}} > Sign in </NavLink>
                    <NavLink to='/signup'  style={{textDecoration:'none', color:'white',marginLeft:'20px'}} > Sign up</NavLink>
                </ul>
            </div>
        </div>
    )
}
