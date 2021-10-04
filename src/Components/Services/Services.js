import React, { useEffect, useState } from 'react';
import Service from '../Service/service';
import './Services.css'

const Services = () => {

    const [ carts , setCarts] = useState([])
    useEffect(()=>{
        fetch('./ourcourse.json')
        .then(res=>res.json())
        .then(data=> setCarts(data))
    },[])

    return (
        <div>
            <div className="service-area">
                <h2>OUR SERVICES</h2>
            </div>

            <div className='container'>
               <div className="text-center servise-text-area">
               <h3 className='service-title'>Our Best services</h3>
                <p>We alawys provide our best servise to our clint</p>
               </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    carts.map(cart=><Service
                    key={cart.id}
                    cart={cart}
            
                    ></Service>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Services;