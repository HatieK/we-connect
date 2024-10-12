import { MuiOtpInput } from "mui-one-time-password-input";
import React from "react";

const OTPInput = ({ onChange, value }) => {
  return <MuiOtpInput length={6} value={value} onChange={onChange} />;
};

export default OTPInput;
