import FormField from "@components/FormField";
import OTPInput from "@components/FormInput/OTPInput";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const OTPVerifyPage = () => {
  const { control } = useForm();

  return (
    <div>
      <p className="text-2xl font-bold mt-6 text-center">
        Two-Step Verification 💬
      </p>
      <p className="mb-4">
        We sent a verification code to your mobile. Enter the code from the
        mobile in the field below.
      </p>
      <form className="flex flex-col gap-4">
        <FormField
          name="otp"
          label="Type your 6 digit security code"
          control={control}
          Component={OTPInput}
        />

        <Button variant="contained">Verify My Account</Button>
      </form>
      <p className="mt-6">
        Didn't get the code? <Link to="/login">Resend</Link>
      </p>
    </div>
  );
};

export default OTPVerifyPage;
