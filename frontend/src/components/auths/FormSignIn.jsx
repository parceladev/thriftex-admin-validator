import { useState } from "react";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import BorderButton from "./BorderButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { saveToken, validateToken } from "../../utils/TokenUtilities";

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

      const response = await axios({
        method: "post",
        url: "http://localhost/rest.thriftex/api/users/login",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const data = response.data;
      console.log(data);

      if (data.status) {
        if (!data.access_token) {
          console.error("Token is undefined or null.");
        } else {
          saveToken(data.access_token);
        }

        const validation = validateToken(data.token);
        if (validation.valid) {
          // console.log('Token is valid:', validation.decoded);
          if (validation.decoded.role === "validator") {
            navigate("/validator-role/dashboard");
          } else if (validation.decoded.role === "admin") {
            navigate("/admin-role/dashboard");
          } else {
            console.error("You Dont Allowed Access", validation.decoded.role);
            navigate("/");
          }
        } else {
          throw new Error("Invalid token");
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <InputEmail
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
          />
        </div>
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
        <p className="text-center text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormSignIn;
