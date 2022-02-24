import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // backgroundColor: `brown !important`
                }
            }
        }
    }
})