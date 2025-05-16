
import axios from 'axios';
import { endpoints } from '../config';

const api = axios.create();

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const productService = {
  getAllProducts: () => api.get(endpoints.products.all),
  createProduct: (data) => api.post(endpoints.products.create, data),
  updateProduct: (id, data) => api.put(`${endpoints.products.update}/${id}`, data),
  deleteProduct: (id) => api.delete(`${endpoints.products.delete}/${id}`),
};

export const orderService = {
  createOrder: (data) => api.post(endpoints.orders.create, data),
  getUserOrders: () => api.get(endpoints.orders.userOrders),
  getAllOrders: () => api.get(endpoints.orders.allOrders),
};

export default api;
