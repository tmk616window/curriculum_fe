import React from "react";
import { Select as MuiSelect } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type SelectProps = {
  name: string;
  control: Control<FieldValues, any>;
  children: React.ReactNode;
};

const Select: React.FC<SelectProps> = ({ name, control, children }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MuiSelect {...field}>
          {children}
        </MuiSelect>
      )}
    />
  );
};

export default Select;
