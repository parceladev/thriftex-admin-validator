import axios from 'axios';
import { getAccessToken } from '../utils/token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

export const fetchLegitData = async () => {
  const token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    return { success: false, message: 'Not logged in' };
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/legits/validatordo`, {
      headers: { Authorization: `${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching List Legit:', error);
    return null;
  }
};

export const fetchDetailListLegit = async (case_code) => {
  const token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    return { success: false, message: 'Not logged in' };
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/legits/datadetail`, {
      params: { case_code },
      headers: { Authorization: `${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching details Legit:', error);
    return null;
  }
};

export const fetchValidationLegit = async (legit_id) => {
  const token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    return { success: false, message: 'Not logged in' };
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/legits/validation`, {
      params: { legit_id },
      headers: { Authorization: `${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching Validation Legit:', error);
    return null;
  }
};
