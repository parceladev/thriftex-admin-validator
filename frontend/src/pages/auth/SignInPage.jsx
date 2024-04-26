import FormSignIn from '../../components/generals/auths/FormSignIn';

const SignInPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-10 p-9"
      style={{
        backgroundImage: "url('../../../public/auth/bg-sign-in.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <FormSignIn />
    </div>
  );
};

export default SignInPage;
