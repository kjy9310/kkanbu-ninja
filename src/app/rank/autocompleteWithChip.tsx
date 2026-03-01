/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import Chip from "@mui/material/Chip";
// import RemoveIcon from "@mui/icons/RemoveCircleOutlineSharp";
import { ButtonGroup , Button, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

export const AutocompleteWithChip = (props:any) => {
  const [val, setVal] = useState([]);

//   const valHtml = val.map((option:any, index) => {
//     // This is to handle new options added by the user (allowed by freeSolo prop).
//     const label = option.name || option;
//     return (
//       <Chip
//         key={label}
//         label={label}
//         deleteIcon={<span> - </span>
//         //<RemoveIcon />
//     }
//         onDelete={() => {
//           setVal(val.filter(entry => entry !== option));
//         }}
//       />
//     );
//   });

  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        multiple
        id="tags-standard"
        freeSolo
        filterSelectedOptions
        options={props.data}
        onChange={(e, newValue:any) => {
            setVal(newValue)
            props.onChange(newValue)
        }}
        getOptionLabel={(option:any) => option.name}
        value={val}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            placeholder={props.name}
            margin="normal"
            fullWidth
            sx={{
              '& .MuiInput-underline:before': { borderBottomColor: '#333' },
              '& .MuiInput-underline:hover:before': { borderBottomColor: '#555' },
              '& .MuiInput-underline:after': { borderBottomColor: '#133d62' },
              '& .MuiInputBase-input': { color: '#eee', fontSize: '0.875rem' },
              '& .MuiInputLabel-root': { color: '#888' },
            }}
          />
        )}
        sx={{
          '& .MuiAutocomplete-tag': {
            display: 'none', // We'll show tags in the main header instead
          },
        }}
      />
    </div>
  );
}

