import { useState } from "react";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const login = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("https://shoppy-pzzi.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if response is valid JSON
      const text = await response.text();
      try {
        const result = JSON.parse(text);
        if (!response.ok) throw new Error(result.message || "Login failed");

        // Save user token
        localStorage.setItem("token", result.token);
        setSuccess(true);
      } catch (jsonError) {
        throw new Error("Invalid JSON response from server");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, success };
};

export default useLogin;
