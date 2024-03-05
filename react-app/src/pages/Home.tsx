import React from 'react';
import { Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div
            style={{
                height: '85vh',
                overflowY: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Stack
                alignItems="center"
                justifyContent="center"
                style={{
                    width: '100%',

                    padding: '20px',
                }}
                spacing={5}
            >
                <Typography align="justify" color="black" variant="h3">
                    Hello there so far so good, isn't? 😁
                </Typography>
                <Typography align="justify" color="black" variant="h4">
                    So you render this application without complication, i hope
                    so! 🔥 🥳
                </Typography>
                <Typography align="justify" color="black" variant="h6">
                    This app is to a accomplish the coding challenge for the
                    Senior Software Engineer position with our DevEx Team at
                    Falabella Marketplace, so here is the overview:
                </Typography>
                <Typography align="justify" color="black" variant="h6">
                    📝 Create a full stack application, leveraging the Giphy
                    API. This API gives you instant access to a library with
                    millions of gifs. The application is expected to support the
                    following features:
                    <ul>
                        <li>
                            GIFs Listing and Filtering: users are expected to
                            retrieve, search, and filter GIFs based on typed
                            text.
                        </li>
                        <li>
                            GIF Upload: allow users to upload GIFs to the
                            application, providing metadata you consider
                            valuable.
                        </li>
                        <li>
                            Persistence: Ensure uploaded GIFs are stored
                            persistently. We recommend using a free cloud
                            storage service for this purpose.
                        </li>
                    </ul>
                </Typography>
                <Typography align="justify" color="black" variant="h4">
                    🧪 Test the app, go to <Link to="/gifs">Gifs</Link>
                </Typography>
            </Stack>
        </div>
    );
};

export default Home;
