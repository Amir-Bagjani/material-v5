import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import CommonCard from "../../components/common/CommonCard";
import CommonSearchbar from "../../components/common/CommonSearchbar";
import CommonButton from "../../components/common/CommonButton";
import GridWrapper from "../../components/common/GridWrapper";
import AddUserModal from "../../components/common/new user modal/AddUserModal";

const Authentication = () => {
  const [open, setOpen] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [searchResults, setSearchResults] = React.useState(users);

  const getHeader = () => {
    const handleSearch = (value) => {
      filterData(value);
    };

    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === '') setUsers(searchResults);
        else {
            const filteredData = searchResults.filter((item) => {
                return Object.keys(item).some((key) => 
                item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setUsers(filteredData)
        };
    };

    const addUser = () => {
      setOpen(true);
    };

    const headerStyles = {
      wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "20px",
        paddingRight: "20px",
        height: "65px",
        backgroundColor: "#efefef",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      },
      addUserButton: {
        fontSize: "1.05rem",
      },
    };

    return (
      <Box sx={headerStyles.wrapper}>
        <CommonSearchbar
          Placeholder="Search by email address, phone number, user UID"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <CommonButton
          sx={headerStyles.addUserButton}
          onClick={addUser}
          variant="contained"
          size="large"
        >
          Add User
        </CommonButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
      </Box>
    );
  };

  const addNewUser = (data) => {
    users.push({ ...data });
    setOpen(false);
  };

  const getContent = () => (
    <>
      {users.length ? (
        users.map((user) => (
          <Box sx={{ marginBottom: "20px" }} key={user.phoneNumber}>
            <Typography>User ID: {user.userId}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone Number: {user.phoneNumber}</Typography>
          </Box>
        ))
      ) : (
        <Typography
          align="center"
          sx={{
            margin: "40px 16px",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "1.3rem",
          }}
        >
          No users for this project yet
        </Typography>
      )}
    </>
  );

  return (
    <GridWrapper>
      <CommonCard header={getHeader()} content={getContent()} />
      <AddUserModal
        open={open}
        onClose={() => setOpen(false)}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  );
};

export default Authentication;
