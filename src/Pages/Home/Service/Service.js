import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, price, stay, img,_id } = props.service ||{};
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt=""/>
                <div className ="card-body">
                <h5 className ="card-title">{name}</h5>
                <h6 className="">{price}</h6>
                <h6 className="text-danger">{stay}</h6>
                <Link to={`/services/${_id}`}><button className="btn-dark btn">Books {name}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;