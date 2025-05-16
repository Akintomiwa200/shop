import { useState, useEffect } from "react";
import { BiMessage } from "react-icons/bi";
import { FiRefreshCcw } from "react-icons/fi";
import { CgBell } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useUserContext } from "../context/UserContext"; // Assuming user context is available
import { useNavigate } from "react-router-dom";
import UserAvatar from "../assets/landingimage/img11.png";

const Navbar = () => {
  const { user, fetchUserData } = useUserContext(); // Real-time user context
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch notifications/messages in real-time (Example: Polling every 10 seconds)
  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await fetch("/api/notifications"); // Replace with your API
        const data = await res.json();
        setNotifications(data.notifications);
        setMessages(data.messages);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchUpdates();
    const interval = setInterval(fetchUpdates, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Logout Handler
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 px-8 md:px-16 bg-white w-full shadow-md">
      {/* Left Side - Logo or Title */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>
      </div>

      {/* Right Side - Icons and Profile */}
      <div className="flex items-center gap-4 relative">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer">
          <CgBell size={22} className="text-gray-600" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-2 h-5 w-5 flex items-center justify-center text-xs font-semibold text-white bg-red-500 rounded-full">
              {notifications}
            </span>
          )}
        </div>

        {/* Messages Icon */}
        <div className="relative cursor-pointer">
          <BiMessage size={22} className="text-gray-600" />
          {messages > 0 && (
            <span className="absolute -top-1 -right-2 h-5 w-5 flex items-center justify-center text-xs font-semibold text-white bg-blue-500 rounded-full">
              {messages}
            </span>
          )}
        </div>

        {/* Refresh Button */}
        <FiRefreshCcw
          size={20}
          className="text-gray-500 cursor-pointer hover:rotate-180 transition-transform duration-300"
          onClick={fetchUserData} // Refresh user data
        />

        {/* Profile & Dropdown */}
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={user?.avatar || UserAvatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
            <span className="text-gray-700 font-medium ml-2">{user?.name || "Loading..."}</span>
            <IoMdArrowDropdown size={20} className="text-gray-600 ml-1" />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
              <button onClick={() => navigate("/profile")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Profile
              </button>
              <button onClick={() => navigate("/settings")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Settings
              </button>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;