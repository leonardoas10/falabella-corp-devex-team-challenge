import React from 'react';
import { Grid } from '@mui/material';

// import { AboutResume } from '../components/About/AboutResume';
import { NotFound } from '../components/Layout/Navigation/NotFound';
// import { Desktop, TabletAndBelow } from '../components/Layout/MediaQueries';

const NotFoundPage: React.FC = () => {
    return (
        <>
            <NotFound />
            {/* <Desktop> */}
            {/* <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs={9}>
                        <NotFound />
                    </Grid>
                    <Grid item xs={3}>
                        <AboutResume />
                    </Grid>
                </Grid> */}
            {/* </Desktop> */}
            {/* <TabletAndBelow>
                <NotFound />
            </TabletAndBelow> */}
        </>
    );
};

export default NotFoundPage;
