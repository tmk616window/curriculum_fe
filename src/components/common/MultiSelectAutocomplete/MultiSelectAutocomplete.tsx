import React, { useState } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type label = {
  id: number;
  value: string;
}

type MultiSelectAutocompleteProps = {
  name: string;
  labels: label[]
  control: Control<FieldValues, any>;
}

export const MultiSelectAutocomplete: React.FC<MultiSelectAutocompleteProps> = ({ name, labels, control }) => {
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field }) => (
        <Autocomplete
          multiple
          {...field}
          options={labels}
          getOptionLabel={(option) => option.value}
          renderInput={(params) => (
            <TextField {...params} label={name} variant="outlined" />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option.value}
                {...getTagProps({ index })}
                key={option.id}
              />
            ))
          }
        />
      )}
    />
  );
};

