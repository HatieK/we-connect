import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Supports weights 100-900
import "@fontsource-variable/public-sans";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "@redux/Slices/snackbarSlice";
const RootLayout = () => {
  const dispatch = useDispatch();

  const { open, message, type } = useSelector((state) => state.snackbar);

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert
          // onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RootLayout;
