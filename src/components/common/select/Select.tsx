import React from "react";
import { FormControl, InputLabel, Select as MuiSelect } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type SelectProps = {
  title: string;
  name: string;
  control: Control<FieldValues, any>;
  children: React.ReactNode;
};

const Select: React.FC<SelectProps> = ({ title, name, control, children }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{title}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MuiSelect {...field}>
            {children}
          </MuiSelect>
        )}
      />
    </FormControl>
  );
};

export default Select;
