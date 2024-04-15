import Cookies from "js-cookie";

const saveToken = (token) => {
  Cookies.set("token", token, {
    expires: 30,
    secure: true,
    sameSite: "Strict",
  });
  updateTokenTimestamp();
};

const deleteToken = () => {
  Cookies.remove("token");
  Cookies.remove("token_timestamp");
};

const getToken = () => {
  return Cookies.get("token");
};

const updateTokenTimestamp = () => {
  const now = new Date();
  Cookies.set("token_timestamp", now.getTime().toString(), {
    expires: 30,
    secure: true,
    sameSite: "Strict",
  });
};

const decodeToken = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const validateToken = () => {
  const token = Cookies.get("token");
  if (!token) return { valid: false };

  const decoded = decodeToken(token);
  if (!decoded) {
    return { valid: false };
  }

  const now = Date.now() / 1000;
  if (decoded.exp < now) {
    console.error("Token expired.");
    deleteToken();
    return { valid: false };
  }

  return { valid: true, decoded };
};

export {
  saveToken,
  getToken,
  deleteToken,
  decodeToken,
  validateToken,
  updateTokenTimestamp,
};
