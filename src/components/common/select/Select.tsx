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
        defaultValue={undefined as PathValue<T, Path<T>>} // defaultValue に適切な型を設定
        render={({ field }) => (
          <MuiSelect
            {...field}
            label={label}
            value={field.value ?? ""} // value にデフォルト値を設定
          >
            {children}
          </MuiSelect>
        )}
      />
    </FormControl>
  );
};
