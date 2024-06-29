import React, { ComponentType, LazyExoticComponent, Suspense } from "react";
import Loader from "./loader";

interface LoadableProps {
  component: LazyExoticComponent<ComponentType<any>>;
}

const Loadable: React.FC<LoadableProps> = ({
  component: Component,
  ...props
}) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
