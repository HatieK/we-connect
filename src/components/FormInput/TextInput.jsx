import { TextField } from "@mui/material";
import React from "react";

const TextInput = ({ onChange, type = "text", value, name }) => {
  return (
    <TextField
      fullWidth
      slotProps={{
        input: { className: "h-10 px-3 py-2" },
        htmlInput: { className: "!p-0" },
      }}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
