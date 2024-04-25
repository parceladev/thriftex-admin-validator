import { useState } from 'react';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import BorderButton from './BorderButton';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../utils/auth-api-service';
import { decodeToken, getAccessToken } from '../../utils/token-utilities';

const FormSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSuccess = () => {
    setSuccessMessage('Please Wait, Redirecting...');
    const token = getAccessToken();
    if (token) {
      const decoded = decodeToken(token);
      setTimeout(() => {
        if (decoded.role === 'admin') {
          navigate('/admin-role/dashboard');
        } else if (decoded.role === 'validator') {
          navigate('/validator-role/dashboard');
        } else {
          navigate('/user/home');
        }
      }, 1000);
    } else {
      console.log('No token found');
    }
  };

  const handleError = (message) => {
    setErrorMessage(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!email || !password) {
      handleError('Both email and password are required.');
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      handleError('Please enter a valid email address.');
      return;
    }

    // if (password.length < 8) {
    //   handleError('Password must be at least 8 characters long.');
    //   return;
    // }

    const response = await signIn(email, password);
    if (response.data) {
      handleSuccess();
    } else {
      handleError(response.error);
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
            placeholder="Username or Email"
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
        <p className="mt-2 text-center text-red-500">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="mt-2 text-center text-green-500">{successMessage}</p>
      )}
    </div>
  );
};

export default FormSignIn;
