import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import Icon from '@mui/material/Icon';
import { Link as RouterLink } from 'react-router-dom';

const pages = ['Reddit', 'Hacker News', 'Codeforces', 'Devrant', 'Stack Exchange'];

const ResponsiveAppBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
      <AppBar position="sticky" color="primary">
        <Container maxWidth="xl">
          <Toolbar>
            <a href="/">
            <Box 
              component="img"
              sx={{
                padding: '0.5rem',
                height: 70,
              }}
              alt="logo"
              src="OneReader.png"
              />
            </a>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link component={RouterLink} to={`/${page.toLowerCase().replace(/\s/g, "")}`} color='inherit' underline='none'> {page} </Link>
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0.05 }}>
              <Typography variant="h5" color="inherit" noWrap>
                One Reader For All
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <a href="https://github.com/muditmahajan21/one-reader-for-all-frontend">
                <Icon color="primary.dark">
                  <GitHubIcon />
                </Icon>
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  export default ResponsiveAppBar;
