import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { MdSearch } from "react-icons/md";

const Payment = () => {
    const [payments, setPayments] = useState([
        { id: 1, name: "John Doe", amount: "£500", date: "2025-03-20", status: "Completed", method: "Credit Card" },
        { id: 2, name: "Jane Smith", amount: "£200", date: "2025-03-21", status: "Pending", method: "PayPal" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [newPayment, setNewPayment] = useState({ name: "", amount: "", date: "", status: "Pending", method: "" });
    const [editPaymentId, setEditPaymentId] = useState(null);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPayment({ ...newPayment, [name]: value });
    };

    // Add new payment
    const handleAddPayment = () => {
        if (newPayment.name && newPayment.amount && newPayment.date && newPayment.method) {
            setPayments([
                ...payments,
                { id: payments.length + 1, ...newPayment }
            ]);
            setNewPayment({ name: "", amount: "", date: "", status: "Pending", method: "" });
        }
    };

    // Delete payment
    const handleDeletePayment = (id) => {
        setPayments(payments.filter(payment => payment.id !== id));
    };

    // Edit payment
    const handleEditPayment = (id) => {
        setEditPaymentId(id);
        const paymentToEdit = payments.find(payment => payment.id === id);
        setNewPayment(paymentToEdit);
    };

    // Save edited payment
    const handleSavePayment = () => {
        setPayments(payments.map(payment =>
            payment.id === editPaymentId ? { ...newPayment, id: editPaymentId } : payment
        ));
        setEditPaymentId(null);
        setNewPayment({ name: "", amount: "", date: "", status: "Pending", method: "" });
    };

    // Filter and search payments
    const filteredPayments = payments.filter(payment =>
        payment.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterStatus === "All" || payment.status === filterStatus)
    );

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b-2 pb-4">
                <div>
                    <h2 className="text-4xl font-semibold">Payments</h2>
                    <em className="text-sm">Manage all payment transactions</em>
                </div>
                <button
                    className="bg-blue-500 flex items-center px-6 py-2 rounded-xl text-white"
                    onClick={() => setEditPaymentId(null)}
                >
                    <AiOutlinePlus className="mr-2" /> Add Payment
                </button>
            </div>

            {/* Search and Filter */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg p-2 w-1/3">
                    <MdSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search payments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full outline-none"
                    />
                </div>
                <select
                    className="border p-2 rounded"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="All">All Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                </select>
            </div>

            {/* Add/Edit Payment Form */}
            {editPaymentId !== null ? (
                <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Edit Payment</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={newPayment.name}
                            onChange={handleInputChange}
                            placeholder="Payer Name"
                            className="border p-2 rounded"
                        />
                        <input
                            type="text"
                            name="amount"
                            value={newPayment.amount}
                            onChange={handleInputChange}
                            placeholder="Amount"
                            className="border p-2 rounded"
                        />
                        <input
                            type="date"
                            name="date"
                            value={newPayment.date}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                        />
                        <select
                            name="status"
                            value={newPayment.status}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Failed">Failed</option>
                        </select>
                        <input
                            type="text"
                            name="method"
                            value={newPayment.method}
                            onChange={handleInputChange}
                            placeholder="Payment Method"
                            className="border p-2 rounded"
                        />
                        <button onClick={handleSavePayment} className="bg-green-500 text-white px-4 py-2 rounded">
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Add New Payment</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={newPayment.name}
                            onChange={handleInputChange}
                            placeholder="Payer Name"
                            className="border p-2 rounded"
                        />
                        <input
                            type="text"
                            name="amount"
                            value={newPayment.amount}
                            onChange={handleInputChange}
                            placeholder="Amount"
                            className="border p-2 rounded"
                        />
                        <input
                            type="date"
                            name="date"
                            value={newPayment.date}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                        />
                        <input
                            type="text"
                            name="method"
                            value={newPayment.method}
                            onChange={handleInputChange}
                            placeholder="Payment Method"
                            className="border p-2 rounded"
                        />
                        <button onClick={handleAddPayment} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add Payment
                        </button>
                    </div>
                </div>
            )}

            {/* Payments Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-blue-100 text-gray-700">
                            <th className="p-3">Payer</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Method</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((payment) => (
                            <tr key={payment.id} className="border-t">
                                <td className="p-3">{payment.name}</td>
                                <td className="p-3">{payment.amount}</td>
                                <td className="p-3">{payment.date}</td>
                                <td className="p-3">{payment.status}</td>
                                <td className="p-3">{payment.method}</td>
                                <td className="p-3 flex gap-2">
                                    <button className="bg-blue-500 p-2 rounded-lg text-white" onClick={() => handleEditPayment(payment.id)}>
                                        <BiEdit />
                                    </button>
                                    <button className="bg-red-500 p-2 rounded-lg text-white" onClick={() => handleDeletePayment(payment.id)}>
                                        <TiTimes />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payment;
