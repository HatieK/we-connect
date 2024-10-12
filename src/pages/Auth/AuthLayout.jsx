import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="bg-dark-200 flex items-center justify-center h-screen">
      <div className="bg-white w-[450px] h-fit px-8 py-10">
        <img className="mx-auto mb-6" src="/weconnect-logo.png" alt="" />
        <Suspense fallback={<p>Loading</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AuthLayout;
