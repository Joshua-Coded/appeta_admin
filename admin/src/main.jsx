import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ExpensesProvider } from "./context/ExpensesContext";
import { InvestmentsProvider } from "./context/InvestmentsContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvestmentsProvider>
      <ExpensesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ExpensesProvider>
    </InvestmentsProvider>
  </React.StrictMode>
);
