

import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { CgUser } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { FcLeft } from "react-icons/fc";
import { MdDashboard, MdPayments } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import logo from "../../assets/landingimage/logo.png";







// const AdminSidebar = () => {
//   const location = useLocation();
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div
//       className={`h-screen bg-blue-700 text-white flex flex-col justify-between p-4 shadow-md sticky top-0 transition-all duration-300 
//       ${isCollapsed ? "w-20" : "w-64"}`}
//     >

//       <div className="flex justify-between items-center mb-6">
//         {!isCollapsed && (
//           <Link to="/" className="">
//             <img src={logo} alt="Arries Logo" className="h-12" />
//           </Link>
//         )}
//         <button
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           className="p-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white"
//         >
//           {isCollapsed ? <BiMenu size={30} /> : <FcLeft size={30} />}
//         </button>
//       </div>


//       <ul className="space-y-2 flex-grow my-8">
//         {[
//           { name: "Dashboard", icon: <MdDashboard size={30} />, path: "/admin/dashboard" },
//           { name: "Users", icon: <CgUser size={30} />, path: "/admin/dashboard/users" },
//           { name: "Products", icon: <FaProductHunt size={30} />, path: "/admin/dashboard/products" },
//           { name: "Payments", icon: <MdPayments size={30} />, path: "/admin/dashboard/payment" },
//           { name: "Settings", icon: <FiSettings size={30} />, path: "/admin/dashboard/settings" },
//         ].map((link, index) => (
//           <li key={index} className="group relative">
//             <Link
//               to={link.path}
//               className={`p-4 flex items-center rounded-lg cursor-pointer transition-all duration-300 
//                 ${isCollapsed ? "justify-center" : "gap-2"} 
//                 ${isActive(link.path) ? "bg-blue-500 w-full" : "hover:bg-blue-500 text-white"}`}
//             >
//               {link.icon}
//               {!isCollapsed && <span>{link.name}</span>}
//             </Link>


//             {isCollapsed && (
//               <span className="absolute left-full ml-2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all">
//                 {link.name}
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>


//       <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex justify-center items-center gap-2">
//         <BiLogOut size={20} /> {!isCollapsed && <span>Logout</span>}
//       </button>
//     </div>
//   );
// };

// export default AdminSidebar;






const AdminSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`h-screen bg-blue-700 text-white flex flex-col justify-between p-4 shadow-md sticky top-0 transition-all duration-300 
      ${isCollapsed ? "w-20" : "w-64"}`}>
      
      {/* Logo & Toggle Button */}
      <div className="flex justify-between items-center mb-6">
        {!isCollapsed && <Link to="/"><img src={logo} alt="Logo" className="h-12" /></Link>}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-lg bg-blue-800 hover:bg-blue-900">
          {isCollapsed ? <BiMenu size={30} /> : <FcLeft size={30} />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="space-y-2 flex-grow my-8">
        {[
          { name: "Dashboard", icon: <MdDashboard size={30} />, path: "/admin/dashboard" },
          { name: "Users", icon: <CgUser size={30} />, path: "/admin/dashboard/users" },
          { name: "Products", icon: <FaProductHunt size={30} />, path: "/admin/dashboard/products" },
          { name: "Orders", icon: <MdPayments size={30} />, path: "/admin/dashboard/orders" },  // NEW
          { name: "Payments", icon: <MdPayments size={30} />, path: "/admin/dashboard/payment" },
          { name: "Analytics", icon: <FiSettings size={30} />, path: "/admin/dashboard/analytics" }, // NEW
          { name: "Reports", icon: <FiSettings size={30} />, path: "/admin/dashboard/reports" }, // NEW
          { name: "Settings", icon: <FiSettings size={30} />, path: "/admin/dashboard/settings" },
        ].map((link, index) => (
          <li key={index} className="group relative">
            <Link to={link.path} className={`p-4 flex items-center rounded-lg transition-all duration-300 
                ${isCollapsed ? "justify-center" : "gap-2"} 
                ${isActive(link.path) ? "bg-blue-500 w-full" : "hover:bg-blue-500 text-white"}`}>
              {link.icon}
              {!isCollapsed && <span>{link.name}</span>}
            </Link>

            {isCollapsed && (
              <span className="absolute left-full ml-2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100">
                {link.name}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg flex justify-center items-center gap-2">
        <BiLogOut size={20} /> {!isCollapsed && <span>Logout</span>}
      </button>
    </div>
  );
};


export default AdminSidebar;