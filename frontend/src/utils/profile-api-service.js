import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  decodeToken,
  saveToken,
} from "./token-utilities";

const API_BASE_URL = "http://localhost/rest.thriftex/api";

const updateProfile = async (updatedUserData) => {
  const tokenValid = getRefreshToken();
  if (!tokenValid) {
    alert("Session has expired. Please log in again.");
    return { success: false, message: "Session expired" };
  }

  const token = getAccessToken();
  if (!token) {
    console.error("No access token available after refresh.");
    alert("You are not logged in. Please log in and try again.");
    return { success: false, message: "Not logged in" };
  }

  const formData = new FormData();

  const sanitizeInput = (input) => {
    if (typeof input === "string") {
      // eslint-disable-next-line no-control-regex
      return input.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
    }
    return input;
  };

  Object.keys(updatedUserData).forEach((key) => {
    const value = updatedUserData[key];
    if (key === "foto" && value instanceof File) {
      formData.append("foto", value, value.name);
    } else if (value !== undefined && value !== null) {
      const sanitizedValue = sanitizeInput(value);
      formData.append(key, sanitizedValue);
    }
  });

  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/updateuserprofile`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      }
    );

    if (response.status) {
      if (response.data.access_token) {
        saveToken(response.data.access_token, response.data.refresh_token);
      }

      const decoded = decodeToken(response.data.access_token || token);
      return { success: true, user: decoded };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    alert("Failed to get new data, Something Wrong!");
    return { success: false, error };
  }
};

export default updateProfile;
