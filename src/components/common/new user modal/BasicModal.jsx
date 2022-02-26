import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CommonButton from '../CommonButton';


const modalStyles = {
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'end',
        gap: 0.5,
    }
};

const BasicModal = ({ open, onClose,title, subTilte, content, onSubmit }) => {
  return (
    <Modal open={open} onClose={onClose} >
        <Box sx={modalStyles.wrapper}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            {subTilte}
          </Typography>

          {content}

         <Box sx={modalStyles.buttons}>
            <CommonButton variant="contained"  onClick={onSubmit}>Submit</CommonButton>
            <CommonButton  onClick={onClose}>cancel</CommonButton>
         </Box>

        </Box>

        
    </Modal>
  )
}

export default BasicModal