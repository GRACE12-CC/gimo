import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (


<div className='body'>

        <div class="wrapper">
            <h1>Hello Again!</h1>
            <p>Welcome back you've <br /> been missed!</p>
            <form>
                <input type="text" placeholder="Enter username"/>
                    <input type="password" placeholder="Password"/>
                        <p class="recover">
                            <a href="#">Recover Password</a>
                        </p>
                    </form>
                    
                   <Link to="/login/customer">
                   
                    <button>Sign in</button>
                    </Link> 
                    <p class="or">
                        ----- or continue with -----
                    </p>
                    <div class="icons">
                        <i class="fab fa-google"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-facebook"></i>
                    </div>
                    <div class="not-member">
                        Not a member? <a href="#">Register Now</a>



                    </div>
                
                </div>

</div>





                )
}
