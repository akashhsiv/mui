import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Fab, Tooltip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const Add = () => {
  return (
    <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left:{xs:"calc(50% - 25px)",ms:30}}}> 
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default Add;
