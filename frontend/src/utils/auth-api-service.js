import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  deleteToken,
  saveToken,
  validateToken,
  getAccessToken,
} from './token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

export const signIn = async (email, password) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await axios.post(`${API_BASE_URL}/users/login`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    const data = response.data;
    console.log('Response data:', data);

    if (data.status) {
      if (!data.access_token) {
        console.error('Token is undefined or null.');
        return { error: 'No token received' };
      } else {
        saveToken(data.access_token, data.refresh_token);

        const validationResult = await validateToken();
        if (validationResult.valid) {
          return { data };
        } else {
          return { error: 'Invalid or expired token' };
        }
      }
    } else {
      if (data.message === 'akun tidak aktif!') {
        return {
          error: "You don't have access because the admin has restricted you",
        };
      }
      return { error: data.message };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      return {
        error:
          error.response.data.message || 'Your Email or Password do not match!',
      };
    }
    return { error: 'Your Email or Password do not match!' };
  }
};

export const fetchAddValidator = async (userData, onSuccess, onError) => {
  const formData = new FormData();
  Object.keys(userData).forEach((key) => {
    formData.append(key, userData[key]);
  });

  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/register`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    const data = response.data;
    if (data.status) {
      onSuccess(data);
    } else {
      onError(data.message);
    }
  } catch (error) {
    console.error('Registration Error:', error);
    onError('Registration failed. Please try again.');
  }
};

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    deleteToken();
    navigate('/auth/sign-in');
  };

  return logout;
};

export const blockUser = async (userId, isActive) => {
  const formData = new FormData();
  formData.append('user_id', userId);
  formData.append('is_active', isActive);

  const token = getAccessToken();
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/blockuser`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: ` ${token}`,
        },
      }
    );
    console.log('Block user API response:', response);
    return response.data;
  } catch (error) {
    console.error('Error blocking/unblocking user:', error.response || error);
    return { error: 'Failed to update user status.', details: error.message };
  }
};
