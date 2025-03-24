import { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { MdSearch } from "react-icons/md";

const API_URL = "https://shoppy-pzzi.onrender.com/api/products";

const ProductM = () => {
    const [inventory, setInventory] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [modalType, setModalType] = useState(null); // 'add', 'edit', 'delete'
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({ name: "", stock: "", price: "", description: "", image: "" });

    // Fetch products in real time
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setInventory(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    // Add product
    const handleAddProduct = async () => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                fetchProducts();
                closeModal();
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    // Edit product
    const handleEditProduct = async () => {
        try {
            const response = await fetch(`${API_URL}/${selectedProduct._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                fetchProducts();
                closeModal();
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    // Delete product
    const handleDeleteProduct = async () => {
        try {
            const response = await fetch(`${API_URL}/${selectedProduct._id}`, { method: "DELETE" });

            if (response.ok) {
                fetchProducts();
                closeModal();
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    // Open modal
    const openModal = (type, product = null) => {
        setModalType(type);
        setSelectedProduct(product);
        setNewProduct(product || { name: "", stock: "", price: "", description: "", image: "" });
    };

    // Close modal
    const closeModal = () => {
        setModalType(null);
        setSelectedProduct(null);
    };

    // Filtered products
    const filteredInventory = inventory.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b-2 pb-4">
                <div>
                    <h2 className="text-4xl font-semibold">Products</h2>
                    <em className="text-sm">Manage all products</em>
                </div>
                <button
                    className="bg-blue-500 flex items-center px-6 py-2 rounded-xl text-white"
                    onClick={() => openModal("add")}
                >
                    <AiOutlinePlus className="mr-2" /> Add Product
                </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2 w-1/3 mb-6">
                <MdSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full outline-none"
                />
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-blue-100 text-gray-700">
                            <th className="p-3">Image</th>
                            <th className="p-3">Product Name</th>
                            <th className="p-3">Stock Left</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInventory.map((product) => (
                            <tr key={product._id} className="border-t">
                                <td className="p-3">
                                    <img src={product.image || "https://via.placeholder.com/50"} alt={product.name} className="h-12 w-12 rounded-md" />
                                </td>
                                <td className="p-3">{product.name}</td>
                                <td className="p-3">{product.stock}</td>
                                <td className="p-3">£{product.price}</td>
                                <td className="p-3 flex gap-2">
                                    <button className="bg-blue-500 p-2 rounded-lg text-white" onClick={() => openModal("edit", product)}>
                                        <BiEdit />
                                    </button>
                                    <button className="bg-red-500 p-2 rounded-lg text-white" onClick={() => openModal("delete", product)}>
                                        <TiTimes />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredInventory.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center py-4">No products found</td>
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
                            {modalType === "add" ? "Add Product" : modalType === "edit" ? "Edit Product" : "Delete Product"}
                        </h2>

                        {modalType === "delete" ? (
                            <div>
                                <p>Are you sure you want to delete this product?</p>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleDeleteProduct}>Delete</button>
                                    <button className="bg-gray-400 px-4 py-2 rounded" onClick={closeModal}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid gap-3">
                                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Product Name" className="border p-2 rounded" />
                                <input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Stock" className="border p-2 rounded" />
                                <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" className="border p-2 rounded" />
                                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={modalType === "add" ? handleAddProduct : handleEditProduct}>
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

export default ProductM;
