import logo from './logo.svg';
import './App.css';
import { Button,Typography} from "@mui/material";
import { Add, Settings } from '@mui/icons-material';

function App() {
  return (
    <div>
      <Button variant="text">
        Text
      </Button>

      <Button startIcon={<Settings />} 
        variant="contained"
        color="secondary"
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
  <Button varient="contained" sx={{
    backgroundColor:"skyblue",
    color:"888",
    margin:5,
   "&:hover":{
    backgroundColor:"lightblue"
   },
   "&:disabled":{
    backgroundColor:"grey",
    color:"white"
   }

  }}>My Unique Button
  </Button>
  
    </div>
  );
}

export default App;

