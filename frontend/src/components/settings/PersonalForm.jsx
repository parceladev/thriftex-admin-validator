import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import InputForm from './InputForm';
import IdValidator from './IdValidator';

const PersonalForm = (props) => {
  const { userData, handleInputChange } = props;
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full gap-5">
      <h1 className="mb-8 text-2xl font-semibold">
        {t('Personal Information')}
      </h1>
      {userData.role === 'validator' && <IdValidator value={userData.userId} />}
      <div className="relative flex items-center justify-center w-20 h-20 border-2 border-black rounded-full cursor-pointer bg-slate-300">
        {userData.photo ? (
          typeof userData.photo === 'object' ? (
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
        label={t('Username')}
        name="username"
        type="text"
        id="username"
        htmlFor="username"
        placeholder={t('Username')}
        isRequired="required"
        value={userData.username}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label={t('Your Name')}
        name="name"
        type="text"
        id="name"
        htmlFor="name"
        placeholder={t('Username')}
        isRequired="required"
        value={userData.name}
        onChange={handleInputChange}
        readOnly={false}
      />
      <InputForm
        label={t('Phone Number')}
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
        label={t('Gender')}
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
    user_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    photo: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]),
    username: PropTypes.string,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default PersonalForm;
