import logo from './logo.svg';
import './App.css';
import { Button, Typography } from "@mui/material";
import { Add, Settings } from '@mui/icons-material';
import styled from '@emotion/styled';

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&:disabled": {
      backgroundColor: "grey",
      color: "white"
    }
  });

  return (
    <div>
      <Button variant="text">
        Text
      </Button>

      <Button startIcon={<Settings />}
        variant="contained"
        color="otherColor"
        size="small"
      >
        Settings
      </Button>

      <Button startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add New Post
      </Button>

      <Button variant="outlined" disabled>
        Outlined
      </Button>

      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>

      <BlueButton>my button</BlueButton>
      <BlueButton>just a button</BlueButton>
    </div>
  );
}

export default App;
