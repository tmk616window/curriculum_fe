import React from "react";
import { Input as MuiInput, SxProps } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type InputProps = {
  name: string;
  control: Control<FieldValues, any>;
  sxProps: SxProps
  children: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ name, control, sxProps }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <MuiInput
          sx={sxProps}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

export default Input;
