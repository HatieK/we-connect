import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@redux/Slices/authSlice";
import snackbarReducer from "@redux/Slices/snackbarSlice";
import { rootApi } from "@services/rootApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(rootApi.middleware);
  },
});
