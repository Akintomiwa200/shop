import { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdSearch } from "react-icons/md";

const API_URL = "https://shoppy-pzzi.onrender.com/api/users";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [modalType, setModalType] = useState(null); // 'add', 'edit', 'delete'
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "User", image: "" });

    // Fetch users from API
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    // Add User
    const handleAddUser = async () => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                fetchUsers();
                closeModal();
            }
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    // Edit User
    const handleEditUser = async () => {
        try {
            const response = await fetch(`${API_URL}/${selectedUser._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                fetchUsers();
                closeModal();
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    // Delete User
    const handleDeleteUser = async () => {
        try {
            const response = await fetch(`${API_URL}/${selectedUser._id}`, { method: "DELETE" });

            if (response.ok) {
                fetchUsers();
                closeModal();
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Open Modal
    const openModal = (type, user = null) => {
        setModalType(type);
        setSelectedUser(user);
        setNewUser(user || { name: "", email: "", role: "User", image: "" });
    };

    // Close Modal
    const closeModal = () => {
        setModalType(null);
        setSelectedUser(null);
    };

    // Filtered Users
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b-2 pb-4">
                <div>
                    <h2 className="text-4xl font-semibold">Users</h2>
                    <em className="text-sm">Manage all registered users</em>
                </div>
                <button
                    className="bg-blue-500 flex items-center px-6 py-2 rounded-xl text-white"
                    onClick={() => openModal("add")}
                >
                    <AiOutlineUserAdd className="mr-2" /> Add User
                </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2 w-1/3 mb-6">
                <MdSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full outline-none"
                />
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-blue-100 text-gray-700">
                            <th className="p-3">Image</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user._id} className="border-t">
                                <td className="p-3">
                                    <img src={user.image || "https://via.placeholder.com/50"} alt={user.name} className="h-12 w-12 rounded-md" />
                                </td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.role}</td>
                                <td className="p-3 flex gap-2">
                                    <button className="bg-blue-500 p-2 rounded-lg text-white" onClick={() => openModal("edit", user)}>
                                        <BiEdit />
                                    </button>
                                    <button className="bg-red-500 p-2 rounded-lg text-white" onClick={() => openModal("delete", user)}>
                                        <TiTimes />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredUsers.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center py-4">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {modalType && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">
                            {modalType === "add" ? "Add User" : modalType === "edit" ? "Edit User" : "Delete User"}
                        </h2>

                        {modalType === "delete" ? (
                            <div>
                                <p>Are you sure you want to delete this user?</p>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleDeleteUser}>Delete</button>
                                    <button className="bg-gray-400 px-4 py-2 rounded" onClick={closeModal}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid gap-3">
                                <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Full Name" className="border p-2 rounded" />
                                <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" className="border p-2 rounded" />
                                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={modalType === "add" ? handleAddUser : handleEditUser}>
                                    {modalType === "add" ? "Add" : "Save"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
