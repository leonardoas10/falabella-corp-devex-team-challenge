import { Suspense, useContext } from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from '../components/Layout/Navigation/NavBar';
import { Spinner } from '../components/Layout/Spinner';

const Layout: React.FC = () => {
    return (
        <div>
            <ToastContainer />
            <NavBar />
            <Suspense fallback={<Spinner />}>
                <Container
                    maxWidth="xl"
                    sx={{
                        mt: 1,
                        overflow: 'hidden',
                        '@media (min-width: 1001px)': {
                            // Desktop
                            maxHeight: '83vh',
                        },
                        '@media (max-width: 1000px)': {
                            // TabletAndBelow
                            maxHeight: '100vh',
                            p: '1px',
                        },
                    }}
                >
                    <Outlet />
                </Container>
            </Suspense>
        </div>
    );
};

export default Layout;
