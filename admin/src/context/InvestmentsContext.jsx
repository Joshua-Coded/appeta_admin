import React, { createContext, useEffect, useState } from "react";

export const InvestmentsContext = createContext();

export const InvestmentsProvider = ({ children }) => {
    const [investments] = useState([
        { id: 1, name: 'Real Estate', amount: 5000, description: 'Invest in commercial real estate.', risk: 'Medium', gain: '7%', conditions: 'Minimum hold period of 1 year' },
        { id: 2, name: 'Stocks', amount: 3000, description: 'Invest in a diversified stock portfolio.', risk: 'High', gain: '12%', conditions: 'Minimum hold period of 6 months' },
        { id: 3, name: 'Bonds', amount: 2000, description: 'Invest in government and corporate bonds.', risk: 'Low', gain: '5%', conditions: 'Minimum hold period of 2 years' },
        { id: 4, name: 'Cryptocurrency', amount: 1000, description: 'Invest in digital currencies like Bitcoin and Ethereum.', risk: 'Very High', gain: '20%', conditions: 'Minimum hold period of 3 months' },
        { id: 5, name: 'Mutual Funds', amount: 1500, description: 'Invest in a professionally managed portfolio of stocks and bonds.', risk: 'Medium', gain: '8%', conditions: 'Minimum hold period of 1 year' },
        { id: 6, name: 'Gold', amount: 2500, description: 'Invest in physical gold or gold ETFs.', risk: 'Medium', gain: '6%', conditions: 'Minimum hold period of 1 year' },
        { id: 7, name: 'Peer-to-Peer Lending', amount: 500, description: 'Invest in personal loans to individuals.', risk: 'High', gain: '10%', conditions: 'Minimum hold period of 6 months' },
        { id: 8, name: 'Startups', amount: 10000, description: 'Invest in early-stage startups.', risk: 'Very High', gain: '25%', conditions: 'Minimum hold period of 2 years' },
        { id: 9, name: 'REITs', amount: 3000, description: 'Invest in real estate investment trusts.', risk: 'Medium', gain: '7%', conditions: 'Minimum hold period of 1 year' },
        { id: 10, name: 'Art', amount: 2000, description: 'Invest in valuable artworks.', risk: 'High', gain: '9%', conditions: 'Minimum hold period of 5 years' }
    ]);

    const [userInvestments, setUserInvestments] = useState(() => {
        const savedInvestments = localStorage.getItem('userInvestments');
        return savedInvestments ? JSON.parse(savedInvestments) : [];
    });

    useEffect(() => {
        localStorage.setItem('userInvestments', JSON.stringify(userInvestments));
    }, [userInvestments]);

    const addInvestment = (investmentId, amount) => {
        const investment = investments.find(inv => inv.id === investmentId);
        if (investment) {
            setUserInvestments([...userInvestments, { ...investment, investedAmount: parseFloat(amount) }]);
        }
    };

    return (
        <InvestmentsContext.Provider value={{ investments, userInvestments, addInvestment }}>
            {children}
        </InvestmentsContext.Provider>
    );
};
