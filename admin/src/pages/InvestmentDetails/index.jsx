import "./index.css";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { InvestmentsContext } from "../../context/InvestmentsContext";

// src/pages/InvestmentDetails/index.js

const InvestmentDetails = () => {
    const { id } = useParams();
    const { investments } = useContext(InvestmentsContext);
    const investment = investments.find(investment => investment.id === parseInt(id));

    if (!investment) {
        return <div>Investment not found</div>;
    }

    return (
        <div className="investment-details-page">
            <h2>{investment.name}</h2>
            <p>{investment.description}</p>
            <p>Minimum Investment: ${investment.amount.toFixed(2)}</p>
            <p>Risk: {investment.risk}</p>
            <p>Gain: {investment.gain}</p>
            <p>Conditions: {investment.conditions}</p>
            <p>More details about the investment can go here.</p>
        </div>
    );
};

export default InvestmentDetails;
