import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function CommonMenu({anchorEl, open, handleClose, notifications}) {


  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
      >
        {notifications.map(i => (
            <MenuItem key={i.id} onClick={handleClose}>{i.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}