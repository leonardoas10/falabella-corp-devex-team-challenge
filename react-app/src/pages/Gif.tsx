import React, { useEffect, useContext, useState } from 'react';

import {
    ImageList,
    ImageListItem,
    TextField,
    Stack,
    Button,
} from '@mui/material';
import { GifContext } from '../contexts/GifContext';
import { Spinner } from '../components/Layout/Spinner';

const Gif: React.FC = () => {
    const { handlerGetGifs, gifs, handlerCreateGif, totalGifs } =
        useContext(GifContext);
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const gifsPerPage = 9;

    useEffect(() => {
        handlerGetGifs(filter, page, gifsPerPage);
    }, [filter, page]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    const handleNextPage = () => {
        if (gifs.length >= gifsPerPage) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        setPage(page - 1);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file && file.type === 'image/gif') {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    const handleCreateGif = async () => {
        if (title && selectedFile) {
            await handlerCreateGif(title, selectedFile);
            setTitle('');
            setSelectedFile(null);
        }
    };

    return (
        <>
            <TextField
                label="Filter gifs"
                variant="outlined"
                value={filter}
                onChange={handleFilterChange}
                fullWidth
                margin="normal"
            />
            <Stack
                spacing={2}
                justifyContent="center"
                style={{ height: '100vh', overflowY: 'auto' }}
                direction="row"
            >
                {gifs.length === 0 ? (
                    <Spinner />
                ) : (
                    <div
                        style={{
                            maxHeight: 'calc(100vh - 100px)',
                            overflowY: 'auto',
                        }}
                    >
                        <Button
                            disabled={page === 1}
                            onClick={handlePrevPage}
                            variant="contained"
                            color="success"
                        >
                            Previous Page
                        </Button>
                        <Button
                            disabled={
                                gifs.length < gifsPerPage ||
                                page >= Math.ceil(totalGifs / gifsPerPage)
                            }
                            onClick={handleNextPage}
                            variant="contained"
                            color="success"
                        >
                            Next Page
                        </Button>
                        <ImageList
                            sx={{ width: 500, height: 450 }}
                            cols={3}
                            rowHeight={164}
                        >
                            {gifs.map((gif) => (
                                <ImageListItem key={gif.id}>
                                    <img
                                        src={
                                            gif.images
                                                ? gif.images.original.webp
                                                : gif.url
                                        }
                                        alt={gif.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                )}
                <div
                    style={{
                        maxHeight: 'calc(100vh - 100px)',
                        overflowY: 'auto',
                    }}
                >
                    <TextField
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={handleTitleChange}
                        fullWidth
                        margin="normal"
                    />
                    <input
                        type="file"
                        accept="image/gif"
                        onChange={handleFileChange}
                    />
                    <Button
                        onClick={handleCreateGif}
                        variant="contained"
                        color="primary"
                        disabled={!title || !selectedFile}
                    >
                        Upload Gif
                    </Button>
                </div>
            </Stack>
        </>
    );
};

export default Gif;
