import axios from 'axios';
import { getAccessToken, deleteToken } from '../utils/token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

export const fetchSummaryData = async (navigate) => {
  let token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    deleteToken();
    navigate('/user/auth');
    return { success: false, message: 'Not logged in' };
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/legits/summaryadmin`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (response.data.status) {
      return {
        success: true,
        data: response.data.data,
      };
    } else {
      console.error('No data received:', response.data.message);
      return {
        success: false,
        message: response.data.message,
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      success: false,
      message: error.message,
    };
  }
};
