import { useState, useEffect } from 'react';
import PersonalForm from './PersonalForm';
import SecurityForm from './SecurityForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import updateProfile from '../../utils/profile-api-service';
import { decodeToken, getAccessToken } from '../../utils/token-utilities';

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    userId: '',
    photo: '',
    role: '',
    username: '',
    name: '',
    phoneNumber: '',
    gender: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        setUserData({
          userId: decoded.user_id || '',
          photo: decoded.foto || '',
          role: decoded.role || '',
          username: decoded.username || '',
          name: decoded.nama || '',
          phoneNumber: decoded.no_hp || '',
          gender: decoded.jenis_kelamin || '',
          email: decoded.email || '',
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, type, value } = e.target;
    if (type === 'file') {
      const file = e.target.files[0];
      setUserData((prevState) => ({
        ...prevState,
        [name]: file,
      }));
    } else {
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      userData.newPassword ||
      userData.confirmNewPassword ||
      userData.oldPassword
    ) {
      if (!userData.oldPassword) {
        alert('Please enter your old password.');
        return;
      }
      if (userData.newPassword.length < 8) {
        alert('New password must be at least 8 characters long.');
        return;
      }
      if (userData.newPassword !== userData.confirmNewPassword) {
        alert('New passwords do not match.');
        return;
      }
    }

    const updatedUserData = {
      user_id: userData.userId,
      foto: userData.photo,
      role: userData.role,
      username: userData.username,
      nama: userData.name,
      no_hp: userData.phoneNumber,
      jenis_kelamin: userData.gender,
      email: userData.email,
      old_password: userData.oldPassword,
      password: userData.newPassword,
      passconf: userData.confirmNewPassword,
    };

    try {
      const result = await updateProfile(updatedUserData);
      if (result.success) {
        setUserData({
          ...userData,
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        });
        alert('Profile updated successfully!');
        window.location.reload();
      } else {
        const message =
          result.message || 'Failed to update profile. Please try again.';
        alert(message);
      }
    } catch (error) {
      console.error('Error during profile update:', error);
    }
  };

  return (
    <section className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="flex w-full gap-16">
          <PersonalForm
            userData={userData}
            handleInputChange={handleInputChange}
          />
          <SecurityForm
            userData={userData}
            handleInputChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="self-end w-full px-6 py-4 rounded-md mt-14 sm:mt-5 sm:w-fit bg-secondary text-textWhite dark:bg-darkButton dark:text-textWhite"
        >
          <p className="text-lg">Save Information</p>
        </button>
      </form>
    </section>
  );
};

export default AccountSettings;
