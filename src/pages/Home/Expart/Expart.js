import React from 'react';
import './Expart.css'

const Expart = ({ expart }) => {
    const { name, img, expertize } = expart;
    return (
        <div className="expart col-lg-4 col-sm-6 col-12 mb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expart;