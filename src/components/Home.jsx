import React from 'react';
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
import { NavLink } from "react-router-dom";


const Home = () => {

        // const [map, setMap] = useState(false);

        // if(map==true)
        // {
        //     <Redirect to="/Map"/>   
        // }else{

        // }
    // const [login,setLogin]=useState({
    //         email:"",
    //         password:""
    //     })

    //   const  handleChange=(e)=>{
    //         const name=e.target.value;
    //         const value=e.target.value;
    //         console.log(name,value);

    //         setLogin({...login, [name] : value})
    //   }

    return (
        <>
            <h1>Airprobe - Save Environment</h1>
            <img className="wave" src={web} />
	        <div className="container">
                <div className="img">
                    <img src={web1} />
                </div>
	    	
                <div className="login-content">
                    <form>
                        <div className="content">
                            <NewUser/>
                        </div>
                        <img src={web2} />
                        <h2 className="title">For Your Location, Fill The Detail and Log in</h2>
                        <div className="input-div one">
                            <div className="i">
                                <PersonIcon/>
                            </div>
                            <div className="div">
                               <label for="validationDefault01" class="form-label"></label>
                               <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="input" 
                                    name="email"
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="input-div pass">
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

                        <NavLink  activeClassName='menu_active'  exact className="nav-link btn" 
                        to="/Map">Log In</NavLink>  
                        
                        {/* <button type="submit" activeClassName='menu_active' exact className="nav-link btn" 
                        to="/Map" disabled={!performValidation()}>Log In</button>  */}

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
};

export default Home;
