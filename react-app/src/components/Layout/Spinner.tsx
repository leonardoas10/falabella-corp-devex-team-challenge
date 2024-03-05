import React from 'react';
import { Box } from '@mui/material';
import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';

export const Spinner: React.FC = (props: CircularProgressProps) => {
    return (
        <Box
            sx={{
                margin: 'auto',
                position: 'relative',
            }}
        >
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[
                            theme.palette.mode === 'light' ? 200 : 800
                        ],
                }}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: (theme) =>
                        theme.palette.mode === 'light'
                            ? '#1a90ff'
                            : `${process.env.REACT_APP_COLOR_MEDIUM_GRAY}`,
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                size={40}
                thickness={4}
                {...props}
            />
        </Box>
    );
};
