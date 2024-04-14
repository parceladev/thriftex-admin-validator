import React, { useState } from "react";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import BorderButton from "./BorderButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      // console.log("Sending login data:", Object.fromEntries(formData.entries()));

      const response = await axios({
        method: "post",
        url: "http://localhost/rest.thriftex/api/users/login",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const data = response.data;
      console.log("Login response:", data);

      if (data.status) {
        console.log("Login Successful");
        localStorage.setItem("token", data.token);
        // console.log(data.token);

        const token = localStorage.getItem("token");

        const decodeToken = (token) => {
          try {
            const base64Url = token.split(".")[1]; // Ambil bagian payload token
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Ganti karakter sesuai dengan Base64
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

        const decodedToken = decodeToken(token);
        if (decodedToken) {
          const userRole = decodedToken.role; // Asumsikan role disimpan dengan kunci 'role'
          // console.log(userRole);
          // Lakukan navigasi berdasarkan role
          if (userRole === "validator") {
            navigate("/validator-role/dashboard");
          } else if (userRole === "admin") {
            navigate("/admin-role/dashboard");
          }
        } else {
          // Handle error atau lakukan logout
        }
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "Login failed. Please try again.";
      console.error("Login Error:", errorMessage);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="flex flex-col gap-5 sm:p-12 p-9 rounded-2xl text-black bg-white w-full sm:w-[475px]">
      <a href="/" className="flex justify-center mb-4">
        <img src="../../../public/generals/logo.png" alt="Logo" />
      </a>
      <form onSubmit={handleSubmit}>
        <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
        <a href="/forgot-password" className="mb-4 text-sm font-bold">
          Forgot password?
        </a>
        <button
          type="submit"
          className="w-full p-3 text-center text-white rounded-md bg-black/30"
        >
          Sign In
        </button>
        <BorderButton />
      </form>
      {errorMessage && (
        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormSignIn;
