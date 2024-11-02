// MultiSelectAutocomplete.tsx
import React, { useState } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";

const options = [
  { label: "Option 1", id: 1 },
  { label: "Option 2", id: 2 },
  { label: "Option 3", id: 3 },
  { label: "Option 4", id: 4 },
];

export const MultiSelectAutocomplete = () => {
  const [selectedOptions, setSelectedOptions] = useState<{ label: string; id: number; }[]>([])

  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => setSelectedOptions(newValue)}
      value={selectedOptions}
      renderInput={(params) => (
        <TextField {...params} label="Choose options" variant="outlined" />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.label}
            {...getTagProps({ index })}
            key={option.id}
          />
        ))
      }
    />
  );
};

