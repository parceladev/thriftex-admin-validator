import { useState } from 'react';
import InputForm from './InputForm';
import { PropTypes } from 'prop-types';

const SecurityForm = (props) => {
  const { userData, handleInputChange } = props;
  const [showChangePassword, setShowChangePassword] = useState(false);

  const toggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };

  return (
    <div className="flex flex-col w-full gap-5">
      <h1 className="mb-8 text-2xl font-semibold">Security</h1>
      <InputForm
        label="Email"
        type="email"
        name="email"
        id="email"
        htmlFor="email"
        placeholder="Your Email"
        isRequired="none"
        value={userData.email}
        readOnly={true}
        className="bg-gray-100"
      />
      {!showChangePassword && (
        <InputForm
          label="Password"
          type="password"
          name="password"
          id="password"
          htmlFor="password"
          placeholder="Your Password"
          isRequired="none"
          value="encrypted password"
          onChange={handleInputChange}
          readOnly={true}
          className="bg-gray-100"
        />
      )}
      {showChangePassword && (
        <>
          <InputForm
            label="Old Password"
            type="password"
            name="oldPassword"
            id="old-password"
            htmlFor="old-password"
            placeholder="Old Your Password"
            isRequired="required"
            value={userData.oldPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <InputForm
            label="New Password"
            type="password"
            name="newPassword"
            id="new-password"
            htmlFor="new-password"
            placeholder="Your New Password"
            isRequired="required"
            value={userData.newPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <InputForm
            label="Confirm New Password"
            type="password"
            name="confirmNewPassword"
            id="confirm-new-password"
            htmlFor="confirm-new-password"
            placeholder="Confirm Your New Password"
            isRequired="required"
            value={userData.confirmNewPassword}
            onChange={handleInputChange}
            readOnly={false}
          />
          <button
            onClick={toggleChangePassword}
            type="button"
            className="px-4 py-2 text-lg text-gray-600 bg-white border border-lightBorder dark:border-none rounded-sm dark:text-textWhite dark:bg-darkButton w-fit hover:bg-gray-100"
          >
            Cancel
          </button>
        </>
      )}
      {!showChangePassword && (
        <button
          onClick={toggleChangePassword}
          className="px-4 py-3 text-lg rounded-sm bg-secondary dark:bg-darkButton text-textWhite dark:text-textWhite w-fit"
        >
          Change Password
        </button>
      )}
    </div>
  );
};

SecurityForm.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
    oldPassword: PropTypes.string,
    newPassword: PropTypes.string,
    confirmNewPassword: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default SecurityForm;
