import Grid from '@mui/material/Grid';
import CommonButton from '../../components/CommonButton'

const buttonStyles = {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
        backgroundColor: '#009be5',
        '&:hover': {
            backgroundColor: '#006db3'
        },
    },
    '&.MuiButton-outlined': {
        color: "#009be5",
        borderColor: '#009be5',
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },
};

const Authentication = () => {

    return (
        <Grid item xs={8}>
            This is authentication page.
            <CommonButton size='large' variant='contained' sx={buttonStyles}>
                Add user
            </CommonButton>
            <CommonButton size='large' variant='outlined' sx={buttonStyles} >
                Text
            </CommonButton>
        </Grid>
    )
}

export default Authentication
