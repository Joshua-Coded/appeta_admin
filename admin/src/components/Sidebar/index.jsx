import "./index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to="/add" className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to="/list" className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to="/orders" className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Orders</p>
                </NavLink>
                <NavLink to="/earnings" className="sidebar-option">
                    <img src={assets.earnings_icon} alt="" />
                    <p>Earnings</p>
                </NavLink>
                <NavLink to="/investments" className="sidebar-option">
                    <img src={assets.investments_icon} alt="" />
                    <p>Investments</p>
                </NavLink>
                <NavLink to="/expenses" className="sidebar-option">
                    <img src={assets.expenses_icon} alt="" />  {/* Ensure you have an icon for expenses */}
                    <p>Expenses</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
