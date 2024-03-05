import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../pages/Layout';

const Home = lazy(() => import('../pages/Home'));
const Gif = lazy(() => import('../pages/Gif'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const CustomRoutes = () => {
    const routes = (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="gifs" element={<Gif />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
    return <>{routes}</>;
};
