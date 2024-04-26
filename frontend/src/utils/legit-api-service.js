import axios from 'axios';
import { getAccessToken } from '../utils/token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

export const fectchLegitData = async (page, limit, search = '') => {
  const token = getAccessToken();
  try {
    const response = await axios.get(`${API_BASE_URL}/legits/data`, {
      headers: { Authorization: `${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching brands:', error);
    return null;
  }
};
