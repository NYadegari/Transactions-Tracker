import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LoadingProvider, useLoading } from "./context/LoadingContext.jsx";
import LoadingSpinner from "./components/LoadingSpinner/index.jsx";


const AppWrapper = () => {
  const { loading } = useLoading();
  return (
    <>
      {loading && <LoadingSpinner />}
      <RouterProvider router={router} />
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </LoadingProvider>
  </StrictMode>
);