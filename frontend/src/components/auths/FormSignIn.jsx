// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
// import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignIn = () => {
  return (
    <div className="flex flex-col gap-5 sm:p-12 p-9 rounded-2xl text-black bg-white w-full sm:w-[475px]">
      <a href="" className="flex justify-center mb-4">
        <img src="../../../public/generals/logo.png" alt="" />
      </a>
      <InputEmail />
      <InputPassword placeholder="Your Password" />
      <a href="" className="mb-4 text-sm font-bold">
        Forgot password?
      </a>
      {/* <SubmitButton name="Sign In" /> */}
      <a
        href="/admin/dashboard"
        className="w-full p-3 text-center text-white rounded-md bg-black/30"
      >
        Sign In as Admin
      </a>
      <a
        href="/validator/dashboard"
        className="w-full p-3 text-center text-white rounded-md bg-black/30"
      >
        Sign In as Validator
      </a>
      <BorderButton />
    </div>
  );
};

export default FormSignIn;
