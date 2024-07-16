import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Pets from "@mui/icons-material/Pets";
import {
  Mail,
  Notifications,
  AccountCircle,
  ExitToApp,
} from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <div>
          <Avatar
            sx={{ width: 40, height: 40, display: { xs: "block", md: "none" } }} // Increase the size of the icon
            src="https://i.pinimg.com/236x/7f/22/5c/7f225c5433b7bfbbc1499196b73839f4.jpg"
            onClick={(e) => setOpen(true)}
          />
          <Typography
            variant="h6"
            sx={{ marginLeft: 0, display: { xs: "none", md: "block" } }}
          >
            OTAkU HuB
          </Typography>
        </div>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.pinimg.com/236x/cc/ec/25/ccec25ec4cfd6d6e4d640810618e30fb.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.pinimg.com/236x/cc/ec/25/ccec25ec4cfd6d6e4d640810618e30fb.jpg"
          />
          <Typography variant="span">Goku</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => setOpen(false)}>
          <AccountCircle sx={{ marginRight: 1 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={() => setOpen(false)}>
          <AccountCircle sx={{ marginRight: 1 }} />
          My account
        </MenuItem>
        <MenuItem onClick={() => setOpen(false)}>
          <ExitToApp sx={{ marginRight: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
// https://i.pinimg.com/236x/7f/22/5c/7f225c5433b7bfbbc1499196b73839f4.jpg"
