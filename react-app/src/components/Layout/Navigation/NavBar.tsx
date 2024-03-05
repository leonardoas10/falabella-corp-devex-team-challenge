import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { NavigationItems } from './NavigationItems';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static" color="success">
            <Toolbar>
                <NavigationItems direction="row" />
                <Typography align="center" color="white">
                    Gifs App builded by Leonardo Aranguren | Falabella Corp
                    DevEX Team - Falabella Marketplace
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
