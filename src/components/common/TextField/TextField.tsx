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
      render={({ field, formState: { errors } }) => (
        <MuiTextField
          {...field}
          defaultValue={field.value ?? ""}
          fullWidth
          label={name}
          variant="outlined"
          error={!!errors[name]?.message}
        />
      )}
    />
  );
};
