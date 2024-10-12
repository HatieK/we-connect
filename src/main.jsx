import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalProvider from "@context/ModalProvider";
import RootLayout from "@pages/RootLayout";
import HomePage from "@pages/HomePage";
import { ThemeProvider } from "@emotion/react";
import theme from "./config/muiconfigs";
import RegisterPage from "@pages/Auth/RegisterPage";
import AuthLayout from "@pages/Auth/AuthLayout";
import LoginPage from "@pages/Auth/LoginPage";
import OTPVerifyPage from "@pages/Auth/OTPVerifyPage";
import { store } from "@redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/register",
            element: <RegisterPage />,
          },
          { path: "/login", element: <LoginPage /> },
          { path: "/verify-otp", element: <OTPVerifyPage /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  </Provider>
);
