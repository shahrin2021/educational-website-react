import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Homecart from '../Homecart/Homecart';
import './Home.css'
const Home = () => {

    const [courses , setCourses]=useState([])
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div>
            <div className="banner-area">
                <div className='text-center'>
                    <h1 className='home-title'>
                    Learn to be creative
                    </h1>
                    <p className='home-discription'>Learn exciting technologies from web development, design, game development and more!</p>

                   <div className=''>
                   <NavLink to='/service'>
                        <button className='btn btn-primary home-btn'>Our course</button>
                    </NavLink>
                   </div>
                </div>
            </div>

            <div>

                <div className="container">
                <h2 className='home-subtitle'>Our Best Classes</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    
                    {
                        courses.map(course=><Homecart
                        
                            key={course.id}
                            course={course}
                        
                        ></Homecart>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;