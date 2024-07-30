import "./index.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InvestmentsContext } from "../../context/InvestmentsContext";

// src/pages/Investments/index.js

const Investments = () => {
    const { investments, userInvestments, addInvestment } = useContext(InvestmentsContext);
    const [selectedInvestment, setSelectedInvestment] = useState(null);
    const [investmentAmount, setInvestmentAmount] = useState('');

    const navigate = useNavigate();

    const handleInvestmentClick = (investment) => {
        setSelectedInvestment(investment);
    };

    const handleInvestmentAmountChange = (e) => {
        setInvestmentAmount(e.target.value);
    };

    const handleInvest = () => {
        if (selectedInvestment && investmentAmount && parseFloat(investmentAmount) >= selectedInvestment.amount) {
            addInvestment(selectedInvestment.id, investmentAmount);
            toast.success("Investment added successfully!");
            setSelectedInvestment(null);
            setInvestmentAmount('');
        } else {
            toast.error(`Please enter an amount greater than or equal to the minimum investment amount of $${selectedInvestment.amount}.`);
        }
    };

    const handleUserInvestmentClick = (investmentId) => {
        navigate(`/investment-details/${investmentId}`);
    };

    const totalInvested = userInvestments.reduce((total, investment) => total + investment.investedAmount, 0);

    return (
        <div className="investments">
            <h2>Investment Opportunities</h2>
            <div className="total-invested">
                <h3>Total Invested: ${totalInvested.toFixed(2)}</h3>
            </div>
            <div className="investment-list">
                {investments.map((investment) => (
                    <div key={investment.id} className="investment-item" onClick={() => handleInvestmentClick(investment)}>
                        <h4>{investment.name}</h4>
                        <p>{investment.description}</p>
                        <p>Minimum Investment: ${investment.amount.toFixed(2)}</p>
                        <p>Risk: {investment.risk}</p>
                        <p>Gain: {investment.gain}</p>
                        <p>Conditions: {investment.conditions}</p>
                    </div>
                ))}
            </div>
            {selectedInvestment && (
                <div className="investment-details">
                    <h3>Invest in {selectedInvestment.name}</h3>
                    <p>{selectedInvestment.description}</p>
                    <div className="form-group">
                        <label htmlFor="investmentAmount">Investment Amount</label>
                        <input
                            type="number"
                            id="investmentAmount"
                            name="investmentAmount"
                            placeholder={`Minimum ${selectedInvestment.amount}`}
                            value={investmentAmount}
                            onChange={handleInvestmentAmountChange}
                            required
                        />
                    </div>
                    <button onClick={handleInvest} className="invest-button">Invest</button>
                </div>
            )}
            <div className="user-investments">
                <h3>Your Investments</h3>
                <div className="user-investment-list">
                    {userInvestments.map((investment, index) => (
                        <div key={index} className="user-investment-item" onClick={() => handleUserInvestmentClick(investment.id)}>
                            <h4>{investment.name}</h4>
                            <p>Invested Amount: ${investment.investedAmount.toFixed(2)}</p>
                            <p>Risk: {investment.risk}</p>
                            <p>Gain: {investment.gain}</p>
                            <p>Conditions: {investment.conditions}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Investments;
