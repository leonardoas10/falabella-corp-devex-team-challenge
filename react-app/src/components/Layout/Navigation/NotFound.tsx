import { Grid, Typography, Paper } from '@mui/material';
import React from 'react';

// import { TabletAndBelow } from '../MediaQueries';
// import { AboutResume } from '../../About/AboutResume';
// import { useTranslation } from 'react-i18next';

export const NotFound: React.FC = () => {
    return (
        <Paper
            elevation={3}
            sx={{
                display: 'flex',
                p: '15px',
                maxHeight: '83vh',
                backgroundColor: 'background.withoutBlack',
                overflow: 'hidden',
            }}
        >
            <Grid
                container
                spacing={{ xs: 5, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent="center"
                alignItems="center"
                sx={{
                    overflow: 'auto',
                    pl: '5px',
                    pr: '5px',

                    '&::-webkit-scrollbar': {
                        width: '0.4em',
                        marginLeft: '10em',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `red`,
                        outline: '1px solid slategrey',
                        borderRadius: '5px',
                    },
                }}
            >
                <Grid item xs={8}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                    >
                        Not found page
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
