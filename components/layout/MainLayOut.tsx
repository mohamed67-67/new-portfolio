import React from "react";

const MainLayOut = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="m-2 sm:m-5 rounded-xl overflow-hidden min-h-screen">
      {children}
    </div>
  );
};

export default MainLayOut;
