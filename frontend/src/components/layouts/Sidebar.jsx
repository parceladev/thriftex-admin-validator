const Sidebar = () => {
  return (
    <div className="h-screen p-8 bg-white shadow-lg w-72">
      <ul className="space-y-2">
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/pages/legit-check">Legit Check</a>
        </li>
        <li>
          <a href="/pages/brands">Brands</a>
        </li>
        <li>
          <a href="/pages/validator">Validator</a>
        </li>
        <li>
          <a href="/pages/settings">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
