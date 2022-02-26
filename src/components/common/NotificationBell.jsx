import React from "react";
import { Notifications } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import CommonMenu from "./CommonMenu";

const NotificationBell = ({ iconColor }) => {
  const notifications = [
    {id: 1, label: 'First Notification'},
    {id: 2, label: 'second Notification'},
  ]
  const newNotif = `You have ${notifications.length} new notification(s)!`;
  const noNotif = "No Notification";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  

  return (
    <div>
      <Tooltip title={notifications.length ? newNotif : noNotif}>
        <IconButton 
        color={iconColor} 
        onClick={notifications.length ? handleClick : null}
        >
          <Badge badgeContent={notifications.length} color="error">
            <Notifications />
          </Badge>
        </IconButton>
      </Tooltip>
      <CommonMenu 
      anchorEl={anchorEl} 
      open={open} 
      handleClose={handleClose} 
      notifications={notifications}
      />
    </div>
  );
};

export default NotificationBell;
