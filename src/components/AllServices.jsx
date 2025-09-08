import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './AllServices.css'; 
import services from "../data/ServicesData";
import allServicesHeader from '../assets/tired.jpg'; 


const AllServices = () => { 
  return ( 
    <div className="all-services-container"> 
      <h1 className="all-services-title">All Our Services</h1> 
      <div className="all-services-grid"> 
        {services.map((service) => ( 
          <Link to={`/service-details/${service.id}`} key={service.id} className="all-service-box" > 
            <i className={`fa ${service.icon}`} aria-hidden="true"></i> 
            <h2>{service.title}</h2> 
            <p>{service.description}</p> 
          </Link> 
        ))} 
      </div> 
    </div> 
  ); 
}; 

export default AllServices;