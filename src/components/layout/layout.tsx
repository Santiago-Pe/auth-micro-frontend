import { FC } from "react";
import { Outlet } from "react-router-dom";

// Define the component with the FC (Function Component) type
const Layout: FC = () => {
  return (
    <div className="layout font-sans h-screen ">
      <header className="layout-header"></header>
      <main className="flex flex-col justify-center h-full">
        <Outlet />
      </main>
      <footer className="layout-footer">
        {/* <p>&copy; 2023 My Application</p> */}
      </footer>
    </div>
  );
};

export default Layout;
