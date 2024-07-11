import React, { useState } from "react";
import { Avatar, Fab, Tooltip, Box, Typography, Modal, styled, Stack } from '@mui/material';
import { Add as AddIcon, DateRange, TextFields ,} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Add"
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
         width={400}
        height={280}
        bgcolor={"background.default"}
        color={"text.primary"}
        p={3}
        borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://i.pinimg.com/564x/96/71/aa/9671aac619fa889884a4a635e1169e58.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Naruto Uzumaki
            </Typography>
          </UserBox>
          <TextField
          sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <InsertEmoticonIcon color="primary" />
          <AddPhotoAlternateIcon color="secondary" />
          <PersonAddIcon color="success" />
          <VideoCameraBackIcon color="error" />
        </Stack>
        <ButtonGroup
        fullWidth
        variant="contained" aria-label="Basic button group">
          <Button>Post</Button>
          <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;

