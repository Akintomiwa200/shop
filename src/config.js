
const API_BASE_URL = 'https://shoppy-backend.onrender.com/api';

export const endpoints = {
  auth: {
    login: `${API_BASE_URL}/users/login`,
    register: `${API_BASE_URL}/users/register`,
    adminLogin: `${API_BASE_URL}/admin/login`,
    adminRegister: `${API_BASE_URL}/admin/register`,
  },
  products: {
    all: `${API_BASE_URL}/products`,
    create: `${API_BASE_URL}/products/create`,
    update: `${API_BASE_URL}/products/update`,
    delete: `${API_BASE_URL}/products/delete`,
  },
  orders: {
    create: `${API_BASE_URL}/orders/create`,
    userOrders: `${API_BASE_URL}/orders/user`,
    allOrders: `${API_BASE_URL}/orders/all`,
  }
};
