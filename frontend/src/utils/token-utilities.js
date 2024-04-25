import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

const saveToken = (accessToken, refreshToken) => {
  Cookies.set('access_token', accessToken, {
    expires: 1,
    secure: true,
    sameSite: 'Strict',
  });
  Cookies.set('refresh_token', refreshToken, {
    expires: 30,
    secure: true,
    sameSite: 'Strict',
  });
};

const getAccessToken = () => Cookies.get('access_token');

const getRefreshToken = () => Cookies.get('refresh_token');

const deleteToken = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%'.concat(('00' + c.charCodeAt(0).toString(16)).slice(-2)))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

const refreshToken = async () => {
  const currentRefreshToken = getRefreshToken();
  if (!currentRefreshToken) {
    console.error('No refresh token available.');
    return false;
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/refresh_token`,
      {
        refreshToken: currentRefreshToken,
      },
      {
        timeout: 5000,
      }
    );

    const { data } = response;
    if (data.status) {
      saveToken(data.accessToken, data.refreshToken);
      return true;
    } else {
      if (data.tokenInvalid) {
        deleteToken();
      }
      return false;
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    return false;
  }
};

const validateToken = async () => {
  const token = getAccessToken();
  if (!token) {
    return { valid: false };
  }

  try {
    const decoded = decodeToken(token);
    const now = Date.now() / 1000;
    if (decoded.exp < now + 60) {
      const isRefreshed = await refreshToken();
      if (isRefreshed) {
        const newToken = getAccessToken();
        const newDecoded = decodeToken(newToken);
        return { valid: true, decoded: newDecoded };
      } else {
        return { valid: false };
      }
    }
    return { valid: true, decoded };
  } catch (error) {
    console.error('Token validation error:', error);
    deleteToken();
    return { valid: false };
  }
};

export {
  saveToken,
  getAccessToken,
  getRefreshToken,
  deleteToken,
  decodeToken,
  validateToken,
  refreshToken,
};
