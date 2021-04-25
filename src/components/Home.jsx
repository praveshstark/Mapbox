import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import NewUser from './NewUser';
import web from '../img/wave.png';
import web1 from '../img/nature.svg';
import web2 from '../img/avatar.svg';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Redirect } from 'react-router';


const Home = () => {
    const [map,setMap]=useState(false);
    <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Email Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
  
   {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
      } = props;
   
     

     if(map == true){
         return <Redirect to="/Map" />
     }
     else{
        return (
        <>
            <h1>Airprobe - Save Environment</h1>
            <img className="wave" src={web} />
	        <div className="container">
	    	
            <div className="img">
			<img src={web1} />
		    </div>
	    	
            <div className="login-content">
			
            <form >
               <div className="content">
                  <NewUser/>
                </div>
				<img src={web2} />
				
                <h2 className="title">Welcome to Sign in</h2>
                <div className="input-div one">
           		   <div className="i">
                      <PersonIcon/>
           		   </div>
           		   <div className="div">
           		   <input 
                      type="email" 
                      placeholder="Email" 
                      className="input" 
                      name="email"
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      value={values.email}
                      onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                      />
                    {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}

           		   </div>
           		</div>
           		
                <div className="input-div pass">
           		<div className="i"> 
                   <LockIcon/>
           		</div>
           		<div className="div">
           		    <input 
                       type="password"
                       name="password"
                        placeholder="Password"
                         className="input" 
                         id="exampleInputPassword1"
                         value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
                </div>
            	</div>

            	<button  type="submit" activeClassName='menu_active'disabled={isSubmitting}  exact className="nav-link btn" 
                to="/home" onClick={()=>{setMap(true)}}>Log In</button>

                <p className="forgot-password">
                    Forgot <a href="#"> password?</a>
                </p>
                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                        
                <a className="social-icon" href="https://www.instagram.com/stark___xx/" target="_blank">
                <InstagramIcon style={{fontSize:32,color:"	 #ff0000"}}/>
                </a>
            
                <a className="social-icon" href="https://www.linkedin.com/in/starkxx/" target="_blank">
                <LinkedInIcon style={{fontSize:32,color:"#0066ff"}}/>
                </a>
            
                <a className="social-icon" href="https://twitter.com/starkxx2" target="_blank">
                <TwitterIcon  style={{fontSize:32,color:"	 #00b8e6"}}/>
                </a>
            
                <a className="social-icon" href="https://github.com/praveshstark" target="_blank">
                <GitHubIcon style={{fontSize:32,color:"#003300"}}/>
                </a>
           
                <a className="social-icon" href="https://www.facebook.com/pravesh.yadav.75286/" target="_blank">
                <FacebookIcon style={{fontSize:34 ,color:"#0000cc"}}/>
                </a>

               </div>
            </form>
        </div>
    </div>       
    </>
    );
   }}
     }
    </Formik>
};

export default Home;
