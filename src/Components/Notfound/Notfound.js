import React from 'react';
import { NavLink } from 'react-router-dom';
import './Notfound.css'

const Notfound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                       
                        <div className="page-notfount-area text-center">
                                <h2 className ='page-found-number'>404</h2>
                                <h3 className='page-details'>PAGE NOT FOUND</h3>
                                <NavLink to='/home'>
                                    <button className='btn btn-primary'>Go To Home</button>
                                </NavLink>

                         </div> 
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Notfound;