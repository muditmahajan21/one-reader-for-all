import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LaunchIcon from '@mui/icons-material/Launch';

const Post = ( {post} ) => {
    return (
        <div>
            <ListItem dense divider>
            <ListItemText primary={post.title} secondary={post.author + ', ' + post.source} />
            <ListItemIcon>
                <a href={post.url}>
                <LaunchIcon />
                </a>
            </ListItemIcon>
            </ListItem>
        </div>
    )
}

export default Post