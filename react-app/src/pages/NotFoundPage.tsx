import React from 'react';
import { Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <>
            <Stack
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ height: '100vh' }}
            >
                <Typography align="center" color="black" variant="h3">
                    Hey where are you going? 🤔 this page doesn't exist
                </Typography>
                <Typography align="center" color="black" variant="h4">
                    Return to <Link to="/">Home</Link>
                </Typography>
            </Stack>
        </>
    );
};

export default NotFoundPage;
