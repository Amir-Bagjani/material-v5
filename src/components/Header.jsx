import CommonButton from "./CommonButton";
import NotificationBell from "./NotificationBell";
import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";

const headerStyles = {
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#009be5',
        padding: '20px',
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '20px',
        '*': {
            marginRight: '5px',
        },
    },
    middleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        marginLeft: '320px',
    },
    link: {
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.7)',
        "&:hover": {
            color: '#fff',
            cursor: 'pointer',
        },
    },
    webButton: {
        marginRight: '5px',
    },
};

const Header = ({ title }) => {
  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography
        sx={headerStyles.link}
        >
            Go to docs
        </Typography>         
        <NotificationBell iconColor="white" />
        <Avatar alt="Avatar" src="https://mui.com/static/images/avatar/1.jpg" />
      </Box>
      {/*second row*/}
      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1" color="white">
            {title}
        </Typography>
        <Box>
            <CommonButton variant="outlined" sx={headerStyles.webButton}>Web setup</CommonButton>
            <Tooltip title="Help">
                <IconButton sx={headerStyles.helpIcon} color="white" >
                    <HelpOutlinedIcon />
                </IconButton>
            </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
