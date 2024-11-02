import React from "react";
import { TextField as MuiTextField, SxProps } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type TextFieldProps = {
  name: string;
  control: Control<FieldValues, any>;
  sxProps?: SxProps
};

export const TextField: React.FC<TextFieldProps> = ({ name, control, sxProps }) => {
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field, formState: { errors } }) => (
        <MuiTextField
          {...field}
          sx={sxProps}
          fullWidth
          label={name}
          variant="outlined"
          error={errors.text ? true : false}
        />
      )}
    />
  );
};

