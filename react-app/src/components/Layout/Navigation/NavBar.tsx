import React, { useState, useCallback } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Drawer, Typography, Stack } from '@mui/material';

// import { Desktop, TabletAndBelow } from '../MediaQueries';
import { NavigationItems } from './NavigationItems';
// import { SwitchThemeColorMode } from '../Config/SwitchThemeColorMode';
// import { SwitchLanguage } from '../Config/SwitchLanguage';

const NavBar: React.FC = () => {
    // const [drawer, setDrawer] = useState(false);

    // const toggleDrawer = useCallback(() => {
    //     setDrawer(!drawer);
    // }, [drawer]);

    return (
        <AppBar position="static">
            <Toolbar>
                {/* <TabletAndBelow>
                    <Drawer open={drawer} onClose={toggleDrawer}>
                        <NavigationItems direction="column" />
                    </Drawer>
                    <MenuIcon onClick={toggleDrawer} sx={{ mr: 3 }} />

                    <Stack sx={{ flexGrow: '1' }}>
                        <Typography align="center" color="text.primary">
                            Leonardo A.S.
                        </Typography>
                    </Stack>

                    <SwitchThemeColorMode />
                    <SwitchLanguage />
                </TabletAndBelow> */}

                <NavigationItems direction="row" />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
