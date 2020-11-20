import React from "react";
import "./SubscriptionCard.css";

const SubscriptionCard = ({ plan }) => {
    const {
        price,
        type,
        service1,
        service2,
        service3,
        service4,
        service5,
        support1,
        support2,
    } = plan;
    return (
        <div className="  col-xl-3  col-lg-3 col-md-4 col-sm-12 col-12 text-center mb-4">
            <div className="service-card">
                <h2>${price}</h2>
                <small>{type}</small>
                <div className="  line"></div>
                <p>{service1}</p>
                <p>{service2}</p>
                <p>{service3}</p>
                <p>{service4}</p>
                <p>{service5}</p>
                <p>{support1} Days Free Support</p>
                <p>{support2} Support</p>

                <button className="order-btn">Order Now</button>
            </div>
        </div>
    );
};

export default SubscriptionCard;
