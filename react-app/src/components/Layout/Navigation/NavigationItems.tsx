import React, { useContext, memo, useCallback } from 'react';
import { Stack, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { NavigationButton } from './NavigationButton';
import { navigationLists } from '../../../utils/NavigationLists';
// import { SwitchThemeColorMode } from '../Config/SwitchThemeColorMode';
// import { SwitchLanguage } from '../Config/SwitchLanguage';
// import { AccountCircleIcon } from '../../Auth/AccountCircleIcon';
// import { LayoutConfigContext } from '../../../contexts/LayoutConfigContext';
// import { Desktop } from '../MediaQueries';

type TProps = {
    direction: 'column' | 'row';
};

export const NavigationItems: React.FC<TProps> = memo((props) => {
    const navigate = useNavigate();

    const redirectToExternalUrl = useCallback((event: any, to: string) => {
        event.preventDefault();
        return window.open(to, '_blank');
    }, []);

    const navigationList = navigationLists();

    let navigationItems = navigationList['guess'].map((navigation, index) => (
        <Paper
            key={index}
            elevation={0}
            sx={{
                p: '1rem',
                backgroundColor: 'background.withoutBlack',
                a: {
                    textDecoration: 'none',
                    color: 'text.primary',
                },
                '&:hover': {
                    boxShadow: 5,
                    cursor: 'pointer',
                },
            }}
            onClick={
                navigation.external
                    ? (event: any) =>
                          redirectToExternalUrl(event, navigation.to)
                    : () => navigate(navigation.to)
            }
        >
            <NavigationButton
                key={navigation.to}
                link={navigation.to}
                external={navigation.external}
            >
                {navigation.name}
            </NavigationButton>
        </Paper>
    ));

    return (
        <>
            <Stack
                sx={{ flexGrow: '1' }}
                direction={props.direction}
                spacing={2}
                alignItems="center"
            >
                {navigationItems}
            </Stack>
            {/* <Stack direction={props.direction} spacing={2} alignItems="center">
                <Desktop>
                    <SwitchThemeColorMode />
                    <SwitchLanguage />
                </Desktop>
                <AccountCircleIcon />
            </Stack> */}
        </>
    );
});
