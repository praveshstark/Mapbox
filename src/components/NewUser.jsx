import React from 'react'
import { NavLink } from 'react-router-dom';
const NewUser = () => {

    return (
        <>
            <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>New User !</h3>
                    <p>
                    HappY To Here You. New User ! Please Fill Your Details.
                    </p>
                   
                    <NavLink activeClassName='menu_active' exact className="nav-link btn transparent" 
                     to="/Signup">
                     Sign Up</NavLink>
                     
                </div>
                </div>
            </div>
        </>
    )
}

export default NewUser;
