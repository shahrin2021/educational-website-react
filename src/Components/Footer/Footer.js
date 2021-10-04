import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>
           <div className ="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="footer-title">
                        <h2 >Future IT</h2>
                        <p>Future It is a institute of degital platform .we keep belief in learning </p>
                        <p className="copyright-massage">all ©Copyright reserved by FUTURE IT</p>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-center justify-content-center">
                        <ul className='footer-menu d-flex'>
                        <li><NavLink className='nav-link ' to='home'>Home</NavLink></li>
                        <li><NavLink className='nav-link ' to='/service'>Service</NavLink></li>
                        <li><NavLink className='nav-link ' to='/about'>AboutUs</NavLink></li>
                        <li><NavLink className='nav-link ' to='contact'>Contact</NavLink></li>
                         
                        
                        </ul>
                    </div>

                    <div className="col-lg-3  d-flex align-items-center justify-content-center">
                        <div className="social-area">
                            <div className="footer-social-icon">
                                <i className="uil uil-facebook"></i>
                                <i className="uil uil-linkedin"></i>
                                <i className="uil uil-instagram-alt"></i>
                                <i className="uil uil-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Footer;