
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../config';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const signup = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(endpoints.auth.register, userData);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
};

export default useSignup;
