import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import Input from '@mui/material/Input';


const CommonSearchbar = ({ Placeholder, onChange }) => {
  return (
    <Box sx={{ display: `flex`, flex: 1, alignItems: `center`}}>
        <SearchIcon />
        <Input 
            placeholder={Placeholder} 
            onChange={onChange}
            sx={{width: `80%` ,color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
            disableUnderline
        />
    </Box>
  )
}

export default CommonSearchbar