import React from "react";
import { FormControl, InputLabel, Select as MuiSelect } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type SelectProps = {
  label: string;
  name: string;
  control: Control<FieldValues, any>;
  children: React.ReactNode;
};

export const Select: React.FC<SelectProps> = ({ label, name, control, children }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MuiSelect
            {...field}
            label={label}
            value={field.value ?? ""}
          >
            {children}
          </MuiSelect>
        )}
      />
    </FormControl>
  );
};

