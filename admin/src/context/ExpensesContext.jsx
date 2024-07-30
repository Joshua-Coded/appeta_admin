import React, { createContext, useState } from "react";

// src/context/ExpensesContext.js

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    setExpenses([...expenses, { id: expenses.length + 1, ...expense, amount: parseFloat(expense.amount) }]);
  };

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
