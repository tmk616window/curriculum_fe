import React from "react";
import { FormControl, InputLabel, Select as MuiSelect } from "@mui/material";
import { Control, Controller, FieldValues, Path, PathValue } from "react-hook-form";

type SelectProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  children: React.ReactNode;
};

export const Select = <T extends FieldValues>({ label, name, control, children }: SelectProps<T>) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
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
