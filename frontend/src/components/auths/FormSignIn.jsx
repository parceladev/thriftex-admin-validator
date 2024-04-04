// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
// import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignIn = () => {
  return (
    <div className="flex flex-col gap-5 sm:p-12 p-9 rounded-2xl text-white bg-white/35 w-full sm:w-[475px]">
      <a href="" className="flex justify-center mb-4">
        <img src="/src/assets/auth/form-logo.png" alt="" />
      </a>
      <InputEmail />
      <InputPassword placeholder="Your Password" />
      <a href="" className="mb-4 text-sm font-bold">
        Forgot password?
      </a>
      {/* <SubmitButton name="Sign In" /> */}
      <a
        href="/pages/dashboard"
        className="w-full p-3 text-center rounded-md bg-black/30"
      >
        Sign In
      </a>
      <BorderButton />
    </div>
  );
};

export default FormSignIn;
