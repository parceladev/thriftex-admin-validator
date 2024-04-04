const ValidatorPage = () => {
  return (
    <div>
      <h1 className="mb-10">Validator Page</h1>
      <a
        href="/pages/validator/add-new-validator"
        className="p-2 text-white bg-green-400"
      >
        Add New Validator
      </a>
      <p className="mt-5">
        tambahkan filter validator berdasarkan brand (select brand)
      </p>
      <div>
        <li>
          <a href="/pages/validator/detail/1">Validator 1</a>
        </li>
        <li>
          <a href="/pages/validator/detail/2">Validator 2</a>
        </li>
        <li>
          <a href="/pages/validator/detail/3">Validator 3</a>
        </li>
      </div>
    </div>
  );
};

export default ValidatorPage;
