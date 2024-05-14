import axios from 'axios';

const API_BASE_URL = 'http://localhost/rest.thriftex/api';

export const fetchContactEmail = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/email/sendemailkontak`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.error('Failed to sending message', error);
    return null;
  }
};
