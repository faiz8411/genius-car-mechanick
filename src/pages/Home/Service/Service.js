import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // const {service}=props
    const { name, descript, price, img, time } = service
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <small className="text">reparing duration in hour: {time}</small>
            <h5>price:{price}</h5>
            <p className="px-3">{descript}</p>
        </div>
    );
};

export default Service;