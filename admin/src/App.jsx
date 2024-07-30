import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Add from "./pages/Add";
import Earnings from "./pages/Earnings";
import Expenses from "./pages/Expenses";
import InvestmentDetails from "./pages/InvestmentDetails";
import Investments from "./pages/Investments";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import React from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  const url = "https://backend-appeta-1.onrender.com";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/investment-details/:id" element={<InvestmentDetails />} /> {/* Add InvestmentDetails route */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
