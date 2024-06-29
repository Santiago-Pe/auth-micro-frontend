import React, { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-10 h-10 rounded-full animate-pulse bg-violet"></div>
        <div className="w-10 h-10 rounded-full animate-pulse bg-violet"></div>
        <div className="w-10 h-10 rounded-full animate-pulse bg-violet"></div>
      </div>
    </div>
  );
};

export default Loader;
