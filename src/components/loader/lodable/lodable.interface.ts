import { ComponentType, LazyExoticComponent } from "react";
export default interface LoadableProps {
  component: LazyExoticComponent<ComponentType<any>>;
}
