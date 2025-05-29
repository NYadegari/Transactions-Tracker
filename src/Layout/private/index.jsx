import React from "react";
import { useAuth } from "../../hooks";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const PrivateLayout = () => {
  const { username } = useAuth();

  if (!username) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-100vh flex flex-col items-center">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
