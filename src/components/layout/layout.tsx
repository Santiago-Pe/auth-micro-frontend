import { FC } from "react";
import { Outlet } from "react-router-dom";

// Define the component with the FC (Function Component) type
const Layout: FC = () => {
  return (
    <div className="layout font-sans h-screen bg-gray-950 flex flex-col justify-between text-white">
      <header className="layout-header">{/* <h1>My Application</h1> */}</header>
      <main className="layout-content">
        <Outlet />
      </main>
      <footer className="layout-footer">
        {/* <p>&copy; 2023 My Application</p> */}
      </footer>
    </div>
  );
};

export default Layout;
