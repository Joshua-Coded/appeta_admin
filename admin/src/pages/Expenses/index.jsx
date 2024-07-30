import "./index.css";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ExpensesContext } from "../../context/ExpensesContext";

// src/pages/Expenses/index.js

const Expenses = () => {
    const { expenses, addExpense } = useContext(ExpensesContext);
    const [newExpense, setNewExpense] = useState({ name: '', amount: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExpense({ ...newExpense, [name]: value });
    };

    const handleAddExpense = (e) => {
        e.preventDefault();
        addExpense(newExpense);
        toast.success("Expense added successfully!"); // Show success toast
        setNewExpense({ name: '', amount: '' });
    };

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div className="expenses">
            <h2>Track Expenses</h2>
            <div className="total-expenses">
                <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
            </div>
            <form onSubmit={handleAddExpense}>
                <div className="form-group">
                    <label htmlFor="expenseName">Expense Name</label>
                    <input
                        type="text"
                        id="expenseName"
                        name="name"
                        placeholder="Enter expense name"
                        value={newExpense.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expenseAmount">Amount</label>
                    <input
                        type="number"
                        id="expenseAmount"
                        name="amount"
                        placeholder="Enter amount"
                        value={newExpense.amount}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="add-button">Add Expense</button>
            </form>
            <div className="expense-list">
                {expenses.map((expense) => (
                    <div key={expense.id} className="expense-item">
                        <p>{expense.name}: ${expense.amount.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Expenses;
