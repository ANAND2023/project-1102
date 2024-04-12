import React from "react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme, Box, IconButton, InputBase, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import SaveIcon from '@mui/icons-material/Save';
import Popover from '@mui/material/Popover';
import SearchIcon from "@mui/icons-material/Search";
import { useProSidebar } from "react-pro-sidebar";
import Button from '@mui/material/Button';
const Topbar = ({name , setLandingPage}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { toggleSidebar, broken, rtl } = useProSidebar();

  const userclicked = ()=>{
    console.log("User Clicked ")
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const gotologinpage = ()=>{
    setLandingPage(true)
  }


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          // backgroundColor={colors.primary[400]}
          p={0.2}
          borderRadius={1}
        >
          {/* <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <SearchIcon />
          </IconButton> */}
           <Typography
                    variant="h3"
                    fontWeight="600"
                    color={colors.grey[500]}
                  >
                  Welcome,  
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    color={colors.grey[100]}
                    style={{paddingLeft:"2px"}}
                  >
                  {name}
                  </Typography>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            
           <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon  onClick={handleClick} />
        </IconButton>
        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {/*<Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */} 
        <Button 
        onClick={ gotologinpage }
        variant="contained" color="success">
        Logout
      </Button>
      </Popover>
      </Box>
    </Box>
  );
};

export default Topbar;
