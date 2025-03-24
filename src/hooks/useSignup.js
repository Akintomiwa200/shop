import { useState } from "react";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const signup = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("https://shoppy-pzzi.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Handle non-JSON responses
      const contentType = response.headers.get("content-type");
      let result;
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        throw new Error("Unexpected response from server");
      }

      if (!response.ok) throw new Error(result.message || "Signup failed");

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
};

export default useSignup;
