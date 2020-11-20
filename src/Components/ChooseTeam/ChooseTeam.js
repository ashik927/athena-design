import React, { useState } from "react";
import Footer from "../Footer/Footer/Footer";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import "./ChooseTeam.css";

const subscriptionPlanData = [
    {
        id: 101,
        price: 199,
        type: "For Basic",
        service1: "Homepage",
        service2: "No Inner pages",
        service3: "Asset files",
        service4: "Source file",
        service5: "Free Stock Photos",
        support1: "10",
        support2: "24/7",
    },
    {
        id: 102,
        price: 399,
        type: "For Preferred",
        service1: "Homepage",
        service2: "4 Inner pages",
        service3: "Asset files",
        service4: "Source file",
        service5: "Free Stock Photos",
        support1: "20",
        support2: "24/7",
    },
    {
        id: 103,
        price: 599,
        type: "For Elite",
        service1: "Homepage",
        service2: "8 Inner pages",
        service3: "Asset files",
        service4: "Source file",
        service5: "Free Stock Photos",
        support1: "30",
        support2: "24/7",
    },
];

const ChooseTeam = () => {
    const [subscriptionPlan, setSubscriptionPlan] = useState(
        subscriptionPlanData
    );
    return (
        <section className="team-container">
            <h3 className="text-center my-5">Choose Your Dedicated Team</h3>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    {subscriptionPlan.map((plan) => (
                        <SubscriptionCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default ChooseTeam;
