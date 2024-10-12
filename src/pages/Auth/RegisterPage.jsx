import FormField from "@components/FormField";
import TextInput from "@components/FormInput/TextInput";
import { Alert, Button } from "@mui/material";
import { openSnackbar } from "@redux/Slices/snackbarSlice";
import { useRegisterMutation } from "@services/rootApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { control, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [register, { data = {}, isLoading, error, isSuccess, isError }] =
    useRegisterMutation();

  const onSubmit = (formData) => {
    register(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(openSnackbar({ message: data.message }));
      navigate("/login");
    }
  }, [isSuccess, data.message, navigate, dispatch]);

  return (
    <div>
      <p className="text-2xl font-bold mt-6 text-center">
        Adventure starts here 🚀
      </p>
      <p className="text-2xl font-bold mt-6 text-center">Register</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="fullName"
          label="Full Name"
          control={control}
          Component={TextInput}
        />
        <FormField
          name="email"
          label="Email"
          control={control}
          Component={TextInput}
        />
        <FormField
          name="password"
          label="Password"
          type="password"
          control={control}
          Component={TextInput}
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
        {isError && <Alert severity="error">{error?.data.message}</Alert>}
      </form>
      <p className="mt-6">
        Already Have An Account ? <Link to="/login">Sign In Instead</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
