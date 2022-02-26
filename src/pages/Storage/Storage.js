import { useState } from "react";
import BasicToast from "../../components/common/BasicToast";
import CommonButton from "../../components/common/CommonButton";
import GridWrapper from "../../components/common/GridWrapper";

const Storage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <GridWrapper>
      This is storage page.
      <CommonButton variant="contained" onClick={handleOpen}>
        Open success snackbar
      </CommonButton>
      <BasicToast
        open={open}
        onClose={handleClose}
        severity="success"
        message="Yooo World!"
      />
    </GridWrapper>
  );
};

export default Storage;
