import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";

type TextFieldProps = {
  name: string;
  control: Control<any, any>;
};

export const TextField: React.FC<TextFieldProps> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <MuiTextField
          {...field}
          value={field.value ?? ""}
          onChange={field.onChange}
          fullWidth
          label={name}
          variant="outlined"
          error={!!errors[name]?.message}
        />
      )}
    />
  );
};
