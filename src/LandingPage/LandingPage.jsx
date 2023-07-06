import React from 'react';
import "./LandingPage.css";
import logo from "../img/logo.png";
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
           <NavBar/>
        <div className='landingpage'>

            
            <div className='TextLand'>
                <div>
                    <p className='welcome'>Welcome to <span className='appname'>Gimo</span> where the world comes together</p>
                </div>
                <div>
                    <p className='details'>Gimo provides the opportunity to sell, advertise, purchase products and services.
                        No need for the stuggle, we got your back here. We bring to you all to tools
                        you will need for a happy start.
                    </p>
                    <span className='quote'>"At Gimo, your desire is our pleasure."</span>


                </div>

                <div>
                    <Link to={"login"}>
                    
                    <button className='Btn'>Get Started</button>
                    </Link>
                </div>
            </div>
            <div className='landImage'>

            </div>
        </div>
        </div>
    )
}
