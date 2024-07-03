import React, { Suspense } from "react";
import Loader from "../loader";
import LoadableProps from "./lodable.interface";

const Loadable: React.FC<LoadableProps> = ({
  component: Component,
  ...props
}) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
