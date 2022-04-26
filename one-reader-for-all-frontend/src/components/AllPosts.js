import React from 'react'

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Post from './Post'

const AllPosts = ({ redditPosts = [], stackexchangePosts = [], hackernewsPosts = [], codeforcesPosts = [], devrantPosts = [] }) => {
    return (
    <div>
        <Grid container spacing={3} justifyContent="center">
        {
            redditPosts.map(post => (<List dense sx={{ width: '70%', bgcolor: 'background.paper' }}> <Post post={post} /> </List>))
        }
        </Grid>
        <Grid container spacing={3} justifyContent="center">
        {
            codeforcesPosts.map(post => (<List dense sx={{ width: '70%', bgcolor: 'background.paper' }}> <Post post={post} /> </List>))
        }
        </Grid>
        <Grid container spacing={3} justifyContent="center">
        {
            devrantPosts.map(post => (<List dense sx={{ width: '70%', bgcolor: 'background.paper' }}> <Post post={post} /> </List>))
        }
        </Grid>
        <Grid container spacing={3} justifyContent="center">
        {
            stackexchangePosts.map(post => (<List dense sx={{ width: '70%', bgcolor: 'background.paper' }}> <Post post={post} /> </List>))
        }
        </Grid>
        <Grid container spacing={3} justifyContent="center">
        {
            hackernewsPosts.map(post => (<List dense sx={{ width: '70%', bgcolor: 'background.paper' }}> <Post post={post} /> </List>))
        }
        </Grid>
      </div>
    )
}

export default AllPosts