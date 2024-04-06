import InputForm from './InputForm';

const PersonalForm = () => {
  return (
    <form action="" className="flex flex-col w-full gap-5">
      <h1 className="mb-8 text-2xl font-semibold">Personal Information</h1>
      <div className="flex items-center justify-center w-20 h-20 border-2 border-black rounded-full bg-slate-300">
        <img
          src="../../../public/icons/header/alif-lakipadada-profile.png"
          alt=""
          className="w-full h-full bg-cover "
        />
      </div>
      <InputForm
        label="Username"
        type="text"
        id="username"
        htmlFor="username"
        placeholder="Username"
        isMust="true"
      />
      <InputForm
        label="Name"
        type="text"
        id="name"
        htmlFor="name"
        placeholder="Your Name"
        isOptional="true"
      />
      <InputForm
        label="Phone Number"
        type="text"
        id="phone-number"
        htmlFor="phone-number"
        placeholder="Ypur Phone Number"
        isOptional="true"
      />
      <InputForm
        label="Gender"
        type="text"
        id="gender"
        htmlFor="gender"
        placeholder="Select Gender"
        isOptional="true"
      />
    </form>
  );
};

export default PersonalForm;
