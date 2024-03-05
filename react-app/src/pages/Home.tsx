import React, { useEffect, useContext } from 'react';
import { Stack, Grid } from '@mui/material';

// import { AboutResume } from '../components/About/AboutResume';
// import { PostCardsWrapper } from '../components/Posts/PostCardsWrapper';
// import { Desktop, TabletAndBelow } from '../components/Layout/MediaQueries';
// import { LayoutConfigContext } from '../contexts/LayoutConfigContext';
// import { CategoryContext } from '../contexts/CategoriesContext';
// import { PostContext } from '../contexts/PostContext';

const Home: React.FC = () => {
    // const handleShowNavbarAdminLinks =
    //     useContext(LayoutConfigContext).handleShowNavbarAdminLinks;
    // const handlerGetCategories =
    //     useContext(CategoryContext).handlerGetCategories;

    // const activePostsCount = useContext(PostContext).activePostsCount;
    // const activePosts = useContext(PostContext).activePosts;

    // useEffect(() => {
    //     handleShowNavbarAdminLinks(false);
    //     handlerGetCategories();
    // }, []);

    return (
        <>
            <h1>Home</h1>
            {/* <Desktop>
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs={9} sx={{ marginBottom: '5px' }}>
                        <PostCardsWrapper
                            editMode={false}
                            maxHeight={'82vh'}
                            posts={activePosts}
                            postCount={activePostsCount}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <AboutResume />
                    </Grid>
                </Grid>
            </Desktop> */}
            {/* <TabletAndBelow>
                <Stack direction="column" spacing={2} alignItems="center">
                    <PostCardsWrapper
                        editMode={false}
                        maxHeight={'82vh'}
                        posts={activePosts}
                        postCount={activePostsCount}
                    />
                </Stack>
            </TabletAndBelow> */}
        </>
    );
};

export default Home;
