const AccountSettings = () => {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="block p-3 mt-1 border border-black rounded-md shadow-sm w-96 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nama
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block p-3 mt-1 border border-black rounded-md shadow-sm w-96 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          No. HP
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="block p-3 mt-1 border border-black rounded-md shadow-sm w-96 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block p-3 mt-1 border border-black rounded-md shadow-sm w-96 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Jenis Kelamin
        </label>
        <select
          id="gender"
          name="gender"
          className="block p-3 mt-1 border border-black rounded-md shadow-sm w-96 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option>Pilih Jenis Kelamin</option>
          <option>Laki-laki</option>
          <option>Perempuan</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default AccountSettings;
