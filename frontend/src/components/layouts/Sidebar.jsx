const Sidebar = () => {
  return (
    <div className="h-screen p-8 bg-white shadow-lg w-72">
      <ul className="space-y-2">
        <li>
          <a href="/pages/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/pages/legit-check">Legit Check</a>
        </li>
        <li>
          <a href="/pages/brands">Brands - Admin Feature</a>
        </li>
        <li>
          <a href="/pages/validator">Validator - Admin Feature</a>
        </li>
        <li>
          <a href="/pages/settings">Settings</a>
        </li>
        <li>
          <a href="/auth/sign-in">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
