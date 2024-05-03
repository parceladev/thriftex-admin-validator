import axios from "axios";
import { getAccessToken } from "../utils/token-utilities";

const API_BASE_URL = "http://localhost/rest.thriftex/api";

export const fetchBrands = async (page, limit, search = "") => {
  const token = getAccessToken();
  try {
    const response = await axios.get(`${API_BASE_URL}/brand/list`, {
      params: { page, limit, search },
      headers: { Authorization: `${token}` },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return null;
  }
};

export const createBrand = async (userData, onSuccess, onError) => {
  const token = getAccessToken();

  const formData = new FormData();
  Object.keys(userData).forEach((key) => {
    formData.append(key, userData[key]);
  });

  try {
    const response = await axios.post(
      `${API_BASE_URL}/brand/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      }
    );

    if (response.data.message === "brand berhasil dibuat") {
      return onSuccess(response.data);
    } else {
      return onError(response.data.message);
    }
  } catch (error) {
    console.error("Create Brand Error:", error);
    onError("Error Create Brand. Please try again.");
  }
};

export const deleteBrand = async (id) => {
  const token = getAccessToken();
  try {
    const response = await axios.post(
      `${API_BASE_URL}/brand/delete?id=${id}`,
      {},
      {
        headers: { Authorization: `${token}` },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error deleting brand:", error);
    throw error;
  }
};

export const updateValidatorBrand = async (brandId) => {
  const token = getAccessToken();
  const formData = new FormData();
  formData.append("validator_brand_id", brandId);
  try {
    console.log("Update Validator Brand - brandId:", brandId);
    const response = await axios.post(
      `${API_BASE_URL}/users/updatevalidator`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      }
    );
    console.log("Update Validator Brand - Response Data:", response.data); // Logging untuk memeriksa respons dari server
    return response.data;
  } catch (error) {
    console.error("Error blocking/unblocking user:", error.response || error);
    return { error: "Failed to update user status.", details: error.message };
  }
};
