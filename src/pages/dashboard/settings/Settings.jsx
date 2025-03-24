
import React, { useState } from "react";

const Settings = () => {


  
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingNotifications, setIsEditingNotifications] = useState(false);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNotificationsChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      

    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" mx-auto bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-semibold mb-4">Settings</h1>
        <div className="space-y-6">

          {/* Profile Settings */}
          <div className="p-4 bg-gray-50 rounded-md shadow">
            <h2 className="text-lg font-medium mb-2">Profile</h2>
            <p className="text-sm text-gray-600">Update your personal information</p>
            {isEditingProfile ? (
              <div className="mt-2 space-y-2">
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Email"
                />
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => setIsEditingProfile(false)}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm">Name: {profile.name}</p>
                <p className="text-sm">Email: {profile.email}</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => setIsEditingProfile(true)}
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>

          {/* Account Settings */}
          <div className="p-4 bg-gray-50 rounded-md shadow">
            <h2 className="text-lg font-medium mb-2">Account</h2>
            <p className="text-sm text-gray-600">Manage your account security</p>
            {isEditingPassword ? (
              <div className="mt-2 space-y-2">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="New Password"
                />
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={() => {
                    setIsEditingPassword(false);
                    alert("Password updated successfully!");
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                onClick={() => setIsEditingPassword(true)}
              >
                Change Password
              </button>
            )}
          </div>

          {/* Notifications Settings */}
          <div className="p-4 bg-gray-50 rounded-md shadow">
            <h2 className="text-lg font-medium mb-2">Notifications</h2>
            <p className="text-sm text-gray-600">Customize your notification preferences</p>
            {isEditingNotifications ? (
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={notifications.emailNotifications}
                    onChange={handleNotificationsChange}
                  />
                  <span>Email Notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="smsNotifications"
                    checked={notifications.smsNotifications}
                    onChange={handleNotificationsChange}
                  />
                  <span>SMS Notifications</span>
                </label>
                <button
                  className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  onClick={() => setIsEditingNotifications(false)}
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                onClick={() => setIsEditingNotifications(true)}
              >
                Manage Notifications
              </button>
            )}
          </div>

        </div>
      </div>
    </div>


    </div>
  )
}

export default Settings






