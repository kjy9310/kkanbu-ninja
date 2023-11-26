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
    <div style={{ width: 500 }}>
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
        // renderTags={() => {}}
        value={val}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            placeholder={props.name}
            margin="normal"
            fullWidth
          />
        )}
      />
    </div>
  );
}

