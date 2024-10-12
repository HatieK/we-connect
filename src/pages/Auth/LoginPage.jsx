import FormField from "@components/FormField";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import { login } from "@redux/Slices/authSlice";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { control } = useForm();

  return (
    <div>
      <p className="text-2xl font-bold mt-6 text-center">
        Adventure starts here 🚀
      </p>
      <p className="text-2xl font-bold mt-6 text-center">Login</p>
      <form className="flex flex-col gap-4">
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
        <Button variant="contained">Sign In</Button>
      </form>
      <p className="mt-6">
        New On Our Platform ? <Link to="/register">Create An Account</Link>
      </p>
    </div>
  );
};

export default LoginPage;
