import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { pink } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const pages = ['Home', 'Agents', 'Pricing', 'Partners', 'About Us', 'Blog', 'FAQ', 'Support', 'Contact Us', 'Buy Ads'];
const settings = ['Profile', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color='transparent' >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HomeIcon fontSize='large' sx={{ color: pink[500], display: { xs: 'none', md: 'flex' }, mr: 1 } }
          />

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
                  <Link to={`/${page.toLowerCase().replace(/\s/g, '')}`} style={{ textDecoration: 'none', my: 1, color: '#ff5500', display: 'block' }}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Stack spacing={2} direction='row' sx={{ flexGrow: 1, mx:1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                to={`/${page.toLowerCase().replace(/\s/g, '')}`} 
                style={{ textDecoration: 'none', color: '#ff5500', display: 'block' }}
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Link>
            ))}
          </Stack>
          
          <Box sx={{ flexGrow: 0 }}>
          <HomeIcon fontSize='large' sx={{ color: pink[500], display: { xs: 'flex', md: 'none' }, mr: 1 } }
          />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Box sx={{backgroundColor:'lightgray', padding:'0.5rem',  borderRadius:'5px'}}>
                  <ExpandMoreIcon/>
                </Box>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={`/${setting.toLowerCase().replace(/\s/g, '')}`} style={{ textDecoration: 'none', color: 'black'}}>{setting}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
