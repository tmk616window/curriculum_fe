import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";

type TextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

export const TextField = <T extends FieldValues>({ name, control }: TextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        console.log(errors);
        return (
          <>
            <MuiTextField
              {...field}
              value={field.value ?? ""}
              fullWidth
              error={errors[name] ? true : false}
              helperText={typeof errors[name]?.message === 'string' ? errors[name].message : ""}
              label={name}
            />
          </>
        );
      }} />
  );
};
