import React from 'react';

const service = (props) => {
    const {coursename, url,instructorname,rate,reating,price,duration ,view}=props.cart
    return (
        <div>
             <div class="col">
    <div className="card h-100 p-2">
      <img style={{width:"100%",height:"150px", objectFit:"cover",borderRadius:'10px'}} src={url} class="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title course-name"> {coursename}</h5>
        <h4 className="instructor-name">{instructorname}</h4>
        <h6>Price : <span className="course-price"> $ {price}</span></h6>
        <div className="d-flex justify-content-between">
          <div className="rate-icon">
          < i className="uil uil-star"></i>
         <i className="uil uil-star"></i>
          <i className="uil uil-star"></i>
          <i className="uil uil-star"></i>
          <i class="uil uil-star-half-alt"></i>
          <span className="ms-2">{rate}</span>
        </div>
        <h6><i className="uil uil-user-md"> </i> <span>{reating} k</span></h6>
        
      </div>
      <div className="d-flex justify-content-between">
          <h6><i className="uil uil-clock"></i> {duration}</h6>
          <h6><i className="uil uil-eye"></i> {view} k</h6>
        </div>
        <div className='text-center mt-3'>
        <button className='cart-btn'>GET DETAILS</button>
        </div>

      </div>
      
      
    </div>
  </div>
        </div>
    );
};

export default service;