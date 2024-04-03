// eslint-disable-next-line no-unused-vars
import React from 'react';
import FormSignIn from './../../components/auths/FormSignIn';

const SignInPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-10 p-9"
      style={{
        backgroundImage: "url('/src/assets/auth/bg-img-auth.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <FormSignIn />
      <div className="flex gap-1 text-white">
        <p>Dont have any account?</p>
        <a href="/auth/sign-up" className="font-bold">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default SignInPage;
