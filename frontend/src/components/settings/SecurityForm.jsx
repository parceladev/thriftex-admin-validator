import InputForm from './InputForm';

const SecurityForm = () => {
  return (
    <form action="" className="flex flex-col w-full gap-5">
      <h1 className="mb-8 text-2xl font-semibold">Security</h1>
      <InputForm
        label="Email"
        type="email"
        id="email"
        htmlFor="email"
        placeholder="Your Email"
        isMust={true}
      />
      <InputForm
        label="Old Password"
        type="password"
        id="old-password"
        htmlFor="old-password"
        placeholder="Old Your Password"
        isMust={true}
      />
      <InputForm
        label="New Password"
        type="password"
        id="new-password"
        htmlFor="new-password"
        placeholder="Your New Password"
        isMust={true}
      />
      <InputForm
        label="Confirm New Password"
        type="password"
        id="confirm-new-password"
        htmlFor="confirm-new-password"
        placeholder="Confirm Your New Password"
        isMust={true}
      />
      <button className="px-4 py-3 text-lg text-white rounded-sm bg-secondary w-fit">
        Change Password
      </button>
    </form>
  );
};

export default SecurityForm;
