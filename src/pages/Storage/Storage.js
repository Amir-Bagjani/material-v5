import { useEffect, useState } from "react";
import BasicToast from "../../components/common/BasicToast";
import CommonButton from "../../components/common/CommonButton";
import GridWrapper from "../../components/common/GridWrapper";
import Loading from "../../components/common/Loading";

const Storage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <GridWrapper>
      This is storage page.
      {loading ? (
        <Loading>
            <CommonButton variant="contained" onClick={handleOpen}>
                Open success snackbar
            </CommonButton>
        </Loading>
      ) : (
        <CommonButton variant="contained" onClick={handleOpen}>
            Open success snackbar
        </CommonButton>
      )}
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
