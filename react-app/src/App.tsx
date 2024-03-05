import React, { useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// import { LayoutConfigContext } from './contexts/LayoutConfigContext';
// import { themeColors } from './utils/ThemeColors';
import { CustomRoutes } from './routes';

const App: React.FC = () => {
    // const mode = useContext(LayoutConfigContext).mode;

    // const theme = React.useMemo(() => createTheme(themeColors(mode)), [mode]);

    return (
        // <ThemeProvider theme={theme}>
        //     <CssBaseline />
        <CustomRoutes />
        // </ThemeProvider>
    );
};

export default App;
