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
        isMust={true}
      />
      <InputForm
        label="Name"
        type="text"
        id="name"
        htmlFor="name"
        placeholder="Your Name"
        isOptional={true}
      />
      <InputForm
        label="Phone Number"
        type="text"
        id="phone-number"
        htmlFor="phone-number"
        placeholder="Ypur Phone Number"
        isOptional={true}
      />
      <InputForm
        label="Gender"
        type="select"
        id="gender"
        htmlFor="gender"
        name="gender"
        isOptional={true}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </InputForm>
    </form>
  );
};

export default PersonalForm;
