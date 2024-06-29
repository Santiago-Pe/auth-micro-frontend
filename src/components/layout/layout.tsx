import React, { FC, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components";

const Header = lazy(() => import("../header/header"));
const Footer = lazy(() => import("../footer/footer"));

const Layout: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="layout font-sans h-screen">
        <Header />
        <main className="flex flex-col justify-center h-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
