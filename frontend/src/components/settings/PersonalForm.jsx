import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import InputForm from './InputForm';

const PersonalForm = (props) => {
  const { userData, handleInputChange } = props;

  return (
    <div className="flex flex-col w-full gap-5">
      <h1 className="mb-8 text-2xl font-semibold">Personal Information</h1>
      <div className="relative flex items-center justify-center w-20 h-20 border-2 border-black rounded-full cursor-pointer bg-slate-300">
        {userData.photo ? (
          typeof userData.photo === 'object' ? ( // Periksa apakah userData.photo adalah objek File
            <img
              src={URL.createObjectURL(userData.photo)}
              alt="Pratinjau"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <img
              src={userData.photo}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          )
        ) : (
          <FontAwesomeIcon icon={faUser} size="2x" />
        )}
        <input
          name="photo"
          type="file"
          id="photo"
          onChange={handleInputChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full pointer-events-none">
          <FontAwesomeIcon icon={faPenToSquare} className="text-gray-700" />
        </div>
      </div>

      <InputForm
        label="Username"
        name="username"
        type="text"
        id="username"
        htmlFor="username"
        placeholder="Username"
        isRequired="required"
        value={userData.username}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label="Name"
        name="name"
        type="text"
        id="name"
        htmlFor="name"
        placeholder="Your Name"
        isRequired="required"
        value={userData.name}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        id="phone-number"
        htmlFor="phone-number"
        placeholder="Example: 081234567890"
        isRequired="optional"
        value={userData.phoneNumber}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label="Gender"
        name="gender"
        type="select"
        id="gender"
        htmlFor="gender"
        isRequired="optional"
        value={userData.gender}
        onChange={handleInputChange}
        readOnly={false}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </InputForm>
    </div>
  );
};

PersonalForm.propTypes = {
  userData: PropTypes.shape({
    photo: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]),
    username: PropTypes.string,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default PersonalForm;
