import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Add from "./pages/Add";
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
          <Route path="list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
