import axios from 'axios';
import { decodeToken, getAccessToken } from '../utils/token-utilities';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

export const fetchListLegitAdmin = async () => {
  const token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    return { success: false, message: 'Not logged in' };
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/legits/data`, {
      headers: { Authorization: `${token}` },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching List Legit:', error);
    return null;
  }
};

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

export const fetchValidationLegit = async (formData) => {
  const token = getAccessToken();
  if (!token) {
    alert('You are not logged in. Please log in and try again.');
    return { success: false, message: 'Not logged in' };
  }

  const decoded = decodeToken(token);
  const validatorId = decoded.user_id;

  formData.append('validator_user_id', validatorId);

  console.log('validator_user_id', validatorId);

  try {
    const response = await axios.post(
      `${API_BASE_URL}/legits/validation`,
      formData,
      {
        headers: { Authorization: `${token}` },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching Validation Legit:', error);
    throw new Error('Failed to fetch validation: ' + error.message);
  }
};
