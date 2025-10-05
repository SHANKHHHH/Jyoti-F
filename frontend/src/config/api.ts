// API configuration for different environments
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://jyothi-enterprises-4q1d.onrender.com/api'
  : '/api';

export const API_ENDPOINTS = {
  auth: {
    signup: `${API_BASE_URL}/auth/signup`,
    login: `${API_BASE_URL}/auth/login`,
    profile: `${API_BASE_URL}/auth/profile`,
  },
  contact: {
    submit: `${API_BASE_URL}/contact/submit`,
  },
  cart: {
    checkout: `${API_BASE_URL}/cart/checkout`,
  },
  services: {
    list: `${API_BASE_URL}/services`,
  },
  events: {
    list: `${API_BASE_URL}/events`,
  },
};

export default API_BASE_URL;
