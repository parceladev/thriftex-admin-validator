import axios from "axios";
import { getAccessToken } from "./token-utilities";

const API_BASE_URL = "http://localhost/rest.thriftex/api";

export const fetchAllUsers = async (page, limit, search = "") => {
  const token = getAccessToken();
  try {
    const response = await axios.get(`${API_BASE_URL}/users/list`, {
      params: { page, limit, search},
      headers: { Authorization: `${token}` },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const fetchAllValidator = async (page, limit, search = "") => {
  const token = getAccessToken();
  try {
    const response = await axios.get(`${API_BASE_URL}/users/list`, {
      params: { page, limit, search, role: "validator" },
      headers: { Authorization: `${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};
