import React, { useEffect, useContext } from 'react';
import { Stack, Grid } from '@mui/material';

import { GifContext } from '../contexts/GifContext';

const Gif: React.FC = () => {
    const handlerGetGifs = useContext(GifContext).handlerGetGifs;
    const gifs = useContext(GifContext).gifs;

    useEffect(() => {
        handlerGetGifs();
    }, []);

    return (
        <>
            <h1>Gif</h1>
        </>
    );
};

export default Gif;
