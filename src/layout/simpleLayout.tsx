// SimpleLayout.tsx
import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../components";

const Header = lazy(() => import("../components/header/header"));
const Footer = lazy(() => import("../components/footer/footer"));

const SimpleLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

export default SimpleLayout;
