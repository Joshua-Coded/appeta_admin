import "./index.css";
import React, { useContext, useState } from "react";
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { ExpensesContext } from "../../context/ExpensesContext";

// src/pages/Earnings/index.js

ChartJS.register(BarElement, CategoryScale, LinearScale, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, Filler);

const Earnings = () => {
    const { expenses } = useContext(ExpensesContext); // Use context for expenses
    const [earnings] = useState({
        weeklyEarnings: 1200,
        monthlyEarnings: 4800,
        yearlyEarnings: 57600,
        monthlyTrends: [1200, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400], // Example monthly data
        earningsDistribution: [50, 30, 20] // Example distribution data: food, delivery, tips
    });

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const totalEarnings = earnings.weeklyEarnings + earnings.monthlyEarnings + earnings.yearlyEarnings;

    const barData = {
        labels: ['Weekly', 'Monthly', 'Yearly'],
        datasets: [
            {
                label: 'Earnings',
                data: [earnings.weeklyEarnings, earnings.monthlyEarnings, earnings.yearlyEarnings],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Earnings Trend',
                data: earnings.monthlyTrends,
                fill: true,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.3)',
                tension: 0.4,
            },
        ],
    };

    const pieData = {
        labels: ['Food', 'Delivery', 'Tips'],
        datasets: [
            {
                label: 'Earnings Distribution',
                data: earnings.earningsDistribution,
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
                hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(255, 99, 132, 0.8)'],
                hoverBorderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#555',
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: 'Earnings Overview',
                color: '#333',
                font: {
                    size: 20,
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                    size: 16,
                },
                bodyFont: {
                    size: 14,
                },
                footerFont: {
                    size: 12,
                },
            },
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutQuart',
        },
    };

    const handleWithdraw = (event) => {
        event.preventDefault();
        // Add logic to handle the withdrawal
        alert("Withdrawal request submitted.");
    };

    return (
        <div className="earnings">
            <h2>Earnings Overview</h2>
            <div className="chart-row">
                <div className="chart-container">
                    <h3>Bar Chart</h3>
                    <Bar data={barData} options={options} />
                </div>
                <div className="chart-container">
                    <h3>Line Chart</h3>
                    <Line data={lineData} options={options} />
                </div>
                <div className="chart-container">
                    <h3>Pie Chart</h3>
                    <Pie data={pieData} options={options} />
                </div>
            </div>
            <div className="financial-summary">
                <div className="summary-item">
                    <h3>Total Earnings</h3>
                    <p>${totalEarnings.toFixed(2)}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Expenses</h3>
                    <p>${totalExpenses.toFixed(2)}</p>
                </div>
            </div>
            <div className="withdraw-container">
                <h3>Withdraw Funds</h3>
                <form onSubmit={handleWithdraw} className="withdraw-form">
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" name="amount" placeholder="Enter amount" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="method">Withdrawal Method</label>
                        <select id="method" name="method" required>
                            <option value="momo">Mobile Money</option>
                            <option value="bank">Bank Transfer</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <input type="text" id="details" name="details" placeholder="Account Number or MoMo Number" required />
                    </div>
                    <button type="submit" className="withdraw-button">Withdraw</button>
                </form>
            </div>
            <div className="invest-container">
                <Link to="/investments" className="invest-button">Invest</Link>
            </div>
        </div>
    );
};

export default Earnings;
