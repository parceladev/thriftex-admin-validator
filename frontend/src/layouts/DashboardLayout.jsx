import { Routes, Route } from "react-router-dom";
import { Sidebar } from "../components/layouts";
import routes from "../routes";

export function DashboardLayout() {
  return (
    <section>
      <div className="flex w-full">
        <Sidebar /> {/* Hapus prop `routes` jika tidak diperlukan oleh Sidebar */}
        <div className="w-full h-auto ml-72">
          <Routes>
            {routes.map(({ layout, pagesadmin }) =>
              layout === 'DashboardLayout' && pagesadmin // Pastikan pagesadmin terdefinisi
              ? pagesadmin.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))
              : null // Tambahkan kondisi null untuk menghindari error jika pagesadmin tidak ada
            )}
          </Routes>
        </div>
      </div>
    </section>
  );
}

DashboardLayout.displayName = "/src/layouts/DashboardLayout.jsx";

export default DashboardLayout;
