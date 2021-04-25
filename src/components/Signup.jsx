import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import web from '../img/wave1.png';
import web1 from '../img/power.svg';
import web2 from '../img/avatar.svg';
import { NavLink } from 'react-router-dom';

const Signup = () => {
   
    return (
        <>
            <h1>Airprobe - Save Environment</h1>
             <img className="wave1" src={web} /> 
	          <div className="container">
	    	   
	    	<div className="login-content">
			
            <form className="form" action="index.html" >
               {/* <div className="content">
                  <NewUser/>
                </div> */}
				     <img src={web2} />
				
                <h2 className="title">Sign Up</h2>

              <div className="input-div1 pass">
           		<div className="i"> 
                   <PersonIcon/>
           		</div>
           		<div className="div">
                   <label for="validationDefault01" class="form-label"></label>
           		    <input 
                       type="text" 
                       name="firstname"
                       placeholder="First Name" 
                       className="input" 
                       required
                      />
                    

                   
              </div>
            	</div>

               <div className="input-div1 pass">
           		<div className="i"> 
                   <GroupIcon/>
           		</div>
           		<div className="div">
                   <label for="validationDefault01" class="form-label"></label>
           		    <input 
                       type="text" 
                       name="lastname"
                       placeholder="Last Name" 
                       className="input" 
                       id="exampleInputLastName"
                       required
                      />
                
                       
                </div>
            	</div>

                <div className="input-div1 pass">
           		   <div className="i">
                      <EmailIcon/>
           		   </div>
           		   <div className="div">
                      <label for="validationDefault01" class="form-label"></label>
           		   <input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      className="input" 
                      id="exampleInputEmail1" 
                      required
                    />    
           		   </div>
           	  	</div>

                 <div className="input-div1 pass">
           		<div className="i"> 
                   <LockIcon/>
           		</div>
           		<div className="div">
                   <label for="validationDefault01" class="form-label"></label>
           		    <input 
                       type="password"
                       name="password"
                        placeholder="Password" 
                        className="input" 
                        id="exampleInputPassword1" 
                        required
                    />
         
                      
                </div>
            	</div>

                <button type="submit" className="nav-link btn">Sign Up</button>
               
                <p className="forgot-password1">
                    Already registered ? SignIn              
                </p>
              
            	<NavLink  activeClassName='menu_active' exact className="nav-link btn" 
                 to="/Home">Sign In</NavLink>
             
              
            </form>
            
            
        </div>
        <div className="img">
                <img src={web1} />
		    </div>
    </div>
    
            </>
            );
   
            };

export default Signup;
