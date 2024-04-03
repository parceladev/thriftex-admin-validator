// eslint-disable-next-line no-unused-vars
import React from 'react';
import FormSignUp from './../../components/auths/FormSignUp';

const SignUpPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-10 p-9"
      style={{
        backgroundImage: "url('/src/assets/auth/bg-img-auth.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <FormSignUp />
      <div className="flex gap-1 text-white">
        <p>Have any account?</p>
        <a href="/auth/sign-in" className="font-bold">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SignUpPage;
