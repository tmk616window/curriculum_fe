import { Autocomplete, TextField, Checkbox, ListItem } from "@mui/material";
import { Control, Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { Label } from "@/api/generated/todoAppAPI.schemas";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useState } from "react";

type MultiSelectAutocompleteProps<T extends FieldValues> = {
  label: string;
  labels: Label[];
  name: Path<T>;
  control: Control<T>;
};

export const MultiSelectAutocomplete = <T extends FieldValues>({ name, label, labels, control }: MultiSelectAutocompleteProps<T>) => {
  const [open, setOpen] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onBlur, onChange } }) => (
        <Autocomplete
          multiple
          onBlur={onBlur}
          id="checkboxes-tags"
          options={labels}
          open={open}
          value={labels.filter((label) => Array.isArray(value) && value.includes(label.id))}
          onOpen={() => setOpen(true)}
          disableCloseOnSelect
          onChange={(_, newValue) => {
            onChange(newValue.map((label) => label.id));
            setOpen(false);
          }}
          getOptionLabel={(option) => option.value}
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <ListItem key={key} {...optionProps}>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.value}
              </ListItem>
            );
          }}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label={label} placeholder="Favorites" />
          )}
        />
      )}
    />
  );
};
