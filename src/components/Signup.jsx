import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import web from '../img/wave1.png';
import web1 from '../img/power.svg';
import web2 from '../img/avatar.svg';
import { NavLink } from 'react-router-dom';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";


const Signup = () => (
    <Formik
    initialValues={{ firstname:"", lastname:"", email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Signup in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
     firstname: Yup.string()
         .required("Firstname Required"),
     lastname: Yup.string()
      .required("lastname Required"),
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
        handleSubmit
      } = props;

    return (
        <>
            <h1>Airprobe - Save Environment</h1>
             <img className="wave1" src={web} /> 
	          <div className="container">
	    	   
	    	<div className="login-content">
			
            <form className="form" action="index.html" onSubmit={handleSubmit}>
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
           		    <input 
                       type="text" 
                       name="firstname"
                       placeholder="First Name" 
                       className="input" 
                       id="exampleInputFirstName" 
                       value={values.firstname}
                      onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.firstname && touched.firstname && "error"}
                      />
                    {errors.firstname && touched.firstname && (<div className="input-feedback">{errors.firstname}</div>)}

                   
              </div>
            	</div>

               <div className="input-div1 pass">
           		<div className="i"> 
                   <GroupIcon/>
           		</div>
           		<div className="div">
           		    <input 
                       type="text" 
                       name="lastname"
                       placeholder="Last Name" 
                       className="input" 
                       id="exampleInputLastName"
                       value={values.lastname}
                      onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.lastname && touched.lastname && "error"}
                      />
                    {errors.lastname && touched.lastname && (<div className="input-feedback">{errors.lastname}</div>)}

                       
                </div>
            	</div>

                <div className="input-div1 pass">
           		   <div className="i">
                      <EmailIcon/>
           		   </div>
           		   <div className="div">
           		   <input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      className="input" 
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

                 <div className="input-div1 pass">
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

                <button type="submit" className="nav-link btn">Sign Up</button>
               
                <p className="forgot-password1">
                    Already registered ? SignIn              
                </p>
              
            	<NavLink  activeClassName='menu_active' exact className="nav-link btn" 
                to="/Signup">Sign In</NavLink>
             
              
            </form>
            
            
        </div>
        <div className="img">
                <img src={web1} />
		    </div>
    </div>
    
            </>
            );
   }}
    </Formik>
);

export default Signup;
