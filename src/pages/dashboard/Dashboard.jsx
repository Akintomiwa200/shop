import { useState } from "react";
import { MdSettingsApplications, MdShoppingCart, MdPeople, MdAttachMoney } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/dashboard/settings");
  };

  // Dummy Orders Data
  const orders = [
    { id: "#1001", customer: "John Doe", total: "$120", status: "Processing", date: "2025-03-20" },
    { id: "#1002", customer: "Jane Smith", total: "$320", status: "Shipped", date: "2025-03-21" },
    { id: "#1003", customer: "David Lee", total: "$150", status: "Delivered", date: "2025-03-19" },
  ];

  // Sales Data
  const salesData = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 1800 },
    { month: "Mar", revenue: 1300 },
    { month: "Apr", revenue: 2500 },
    { month: "May", revenue: 3200 },
    { month: "Jun", revenue: 2800 },
  ];

  // Stock Data
  const stockData = [
    { category: "Electronics", stock: 400 },
    { category: "Clothing", stock: 250 },
    { category: "Home", stock: 600 },
    { category: "Beauty", stock: 300 },
    { category: "Toys", stock: 450 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center py-4 border-b-2">
        <h1 className="text-3xl font-semibold">E-Commerce Dashboard</h1>
        <MdSettingsApplications size={30} onClick={handleClick} className="cursor-pointer" />
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 my-8">
        {[
          { name: "Total Orders", icon: <MdShoppingCart />, value: "1,245" },
          { name: "Customers", icon: <MdPeople />, value: "879" },
          { name: "Revenue", icon: <MdAttachMoney />, value: "$45,320" },
          { name: "Stock", icon: <FaBoxOpen />, value: "7,234 Items" },
        ].map((stat, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg flex items-center">
            <div className="text-blue-600 text-4xl">{stat.icon}</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{stat.name}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Orders Table & Sales Chart */}
      <div className="grid grid-cols-2 gap-8">
        {/* Orders Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                {["Order ID", "Customer", "Total", "Status", "Date", "Action"].map((header) => (
                  <th key={header} className="p-3 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.total}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-md text-sm ${
                        order.status === "Shipped" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">
                    <HiOutlineDotsVertical className="text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sales Chart (Line Chart) */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stock Chart (Bar Chart) */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Stock Levels</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stockData}>
            <XAxis dataKey="category" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="stock" fill="#3498db" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
