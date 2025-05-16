
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../config';
import { useUserContext } from '../context/UserContext';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const login = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(endpoints.auth.login, formData);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setSuccess(true);
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, success };
};

export default useLogin;
