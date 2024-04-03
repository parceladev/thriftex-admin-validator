// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignUp = () => {
  return (
    <div className="flex flex-col gap-5 sm:p-12 p-9 rounded-2xl text-white bg-white/35 w-full sm:w-[475px]">
      <a href="" className="flex justify-center mb-4">
        <img src="/src/assets/auth/form-logo.png" alt="" />
      </a>
      <InputEmail />
      <InputPassword placeholder="Your Password" />
      <InputPassword placeholder="Confirm Password" />
      <SubmitButton name="Sign Up" />
      <BorderButton />
      {/* <h1 className={`${styles.heading2}`}>Hello World</h1> */}
    </div>
  );
};

export default FormSignUp;
